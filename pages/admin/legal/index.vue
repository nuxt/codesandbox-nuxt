<template>
  <section>
    <div class="container">
      <p>Here you can see and manage all legal texts.</p>
      <div class="error" v-if="error">{{ error }}</div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="item.name">
            <td>
              <div>{{ i + 1 }}</div>
            </td>
            <td>
              <div>{{ item.name }}</div>
            </td>
            <td>
              <div class="action-link" @click="legal = item; view.edit = true">Edit</div>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" @click="addLegal" v-if="!view.add && !view.edit">+ Add Legal Text</button>
      <div class="editor" v-if="editorView">
        <h2>
          Edit Legal Text
          <img
            src="~/assets/images/close.svg"
            alt="Close"
            @click="view.add = false; view.edit = false"
            class="close-icon"
          >
        </h2>
        <div>
          <label for="legal-name-input">Name:</label>
          <input id="legal-name-input" v-model="legal.name" :disabled="view.edit">
        </div>
        <div>
          <label for="legal-path-input">Path:</label>
          <input id="legal-path-input" v-model="legal.id">
        </div>
        <HtmlEditor v-model="legal.description"></HtmlEditor>
        <button type="button" @click="editLegal()" v-if="!loading">Save</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import cookie from "js-cookie";
import cookieparser from "cookieparser";
import Navigation from "@/components/Navigation";
import HtmlEditor from "@/components/legal/HtmlEditor";

export default {
  name: "Legal",
  layout: "admin",
  components: {
    Navigation,
    HtmlEditor
  },
  data() {
    return {
      error: undefined,
      loading: false,
      items: [
        {
          name: "Parken - Datenschutzbestimmungen",
          id: "/legal/parkingTermsOfUse",
          description: "TEST"
        }
      ],
      legal: {},
      view: {
        edit: false,
        add: false
      }
    };
  },
  computed: {
    editorView() {
      return this.view.add || this.view.edit;
    }
  },
  async asyncData({ params, req }) {
    try {
      let token;
      if (process.server) {
        token = cookieparser.parse(req.headers.cookie).token;
      } else {
        token = cookie.get("token");
      }
      const {
        data: { legal }
      } = await axios.get(`${process.env.SANDBOX_URL}api/getLegal?t=${token}`);
      return { items: legal };
    } catch (e) {
      console.log("Error: ", e);
      return { items: [] };
    }
  },
  methods: {
    addLegal() {
      this.legal = {};
      this.view.add = true;
    },
    async editLegal() {
      try {
        const legalText = {
          id: this.legal.id,
          name: this.legal.name,
          text: this.legal.description
        };
        const {
          data: { legalTexts }
        } = await axios.post(`${process.env.SANDBOX_URL}api/updateLegal`, {
          legal: legalText,
          token: cookie.get("token")
        });
        this.legal = {};

        this.items = legalTexts;
        this.view.add = false;
        this.view.edit = false;
      } catch (e) {
        console.error(e);
        this.error = "Could not save legal text.";
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  text-align: left;
}

.error {
  color: red;
}

.action-link {
  text-decoration: underline;
  cursor: pointer;
}

.close-icon {
  float: right;
  cursor: pointer;
}
</style>
