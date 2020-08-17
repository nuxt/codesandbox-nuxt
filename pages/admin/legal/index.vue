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
                  <div>
                     {{ i + 1 }}
                  </div>
               </td>
               <td>
                  <div>
                     {{ item.name }}
                  </div>
               </td>
               <td>
                  <div class="action-link" @click="legal = item; view.edit = true">Edit</div>
               </td>
            </tr>
            </tbody>
         </table>
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
            <HtmlEditor v-model="legal.description"></HtmlEditor>
            <button type="button" @click="editLegal()" v-if="!loading">Save</button>
         </div>
      </div>
   </section>
</template>

<script>
   import Navigation from "@/components/Navigation"
   import HtmlEditor from "@/components/legal/HtmlEditor"

   export default {
      name: "Legal",
      layout: "admin",
      components: {
         Navigation, HtmlEditor
      },
      data() {
         return {
            error: undefined,
            loading: false,
            items: [
               {
                  name: "Parken - Datenschutzbestimmungen",
                  path: "/legal/parkingTermsOfUse",
                  description: "TEST"
               }
            ],
            legal: {},
            view: {
               edit: false,
               add: false
            }
         }
      },
      computed: {
         editorView() {
            return this.view.add || this.view.edit;
         }
      },
      methods: {
         editLegal() {
            console.log("EDIT", this.legal.description);
         }
      }
   }
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
