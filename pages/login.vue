<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <div>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/registro">Registro</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Login © Demotienda",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Login",
      },
    ],
  },
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        const { data, error } = await response.data;

        if (error) {
          console.log(error);
        } else {
          console.log("-- DATA --", data);
          await this.$router.push("/admin");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>