<template>
  <div>
    <h1>Registro</h1>
    <form @submit.prevent="userLogup">
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
      <NuxtLink to="/login">Login</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Registro © Demotienda",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Registro",
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
    async userLogup() {
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