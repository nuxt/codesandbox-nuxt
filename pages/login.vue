<template>
  <section>
    <h1>Admin Login</h1>
    <p v-if="error" class="error">{{ error }}</p>
    <form @submit.prevent="login">
      <input type="password" v-model="password" placeholder="Password">
    </form>
    <div class="footer">
      <nuxt-link to="/imprint">Impressum & Datenschutz</nuxt-link>|
      <a href="mailto: contact@heylocal.de">Feedback</a>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import cookie from "js-cookie";

export default {
  name: "AdminLoginPage",
  middleware: "noAdmin",
  data() {
    return {
      password: "",
      error: ""
    };
  },
  methods: {
    async login() {
      if (!this.password) return;
      try {
        const {
          data: { token }
        } = await axios.get(
          `https://znsjx.sse.codesandbox.io/api/login?pw=${this.password}`
        );
        cookie.set("token", token);
        this.$router.push("/admin");
      } catch (e) {
        this.error = e.response.data.error;
      }
    }
  }
};
</script>

<style>
.error {
  color: red;
  margin: 0 auto;
  display: block;
  text-align: center;
}

h1 {
  text-align: center;
}

input {
  border-radius: 5px;
  border: solid 1px #EFEFEF;
  padding: 1em 1em;
  display: block;
  margin: 1em auto 2em auto;
  width: 80%;
  max-width: 240px;
}
</style>
