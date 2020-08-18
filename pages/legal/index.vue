<template>
  <div v-html="text">
    <div class="error" v-if="error">{{error}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LegalIndex",
  layout: "legal",
  data() {
    return {
      error: undefined,
      text: ""
    };
  },
  async asyncData() {},
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      try {
        const {
          data: { legal }
        } = await axios.get(
          `${process.env.SANDBOX_URL}api/getLegal?filter=${encodeURIComponent(
            this.$route.query.id
          )}`
        );
        this.text = legal.text;
      } catch (e) {
        console.log("Error: ", e);
        this.error = "could not load data";
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
