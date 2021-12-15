<template>
  <div class="w-1/2 mx-auto bg-white p-5 rounded-lg">
    <Errors class="mb-5" :errors="errors"></Errors>
    <div class="mb-5 border-b border-gray-200">
      <div class="flex flex-wrap items-baseline -mt-2">
        <h2 class="mt-1 ml-2 mb-4 text-2xl font-bold">Login</h2>
      </div>
    </div>

    <form autoComplete="off" @submit.prevent="submitForm">
      <div>
        <Label html-for="email">Email</Label>

        <Input
          id="email"
          v-model="email"
          type="email"
          class="block mt-1 w-full"
          required
          auto-focus
          auto-complete="off"
        />
      </div>

      <div class="mt-4">
        <Label html-for="password">Password</Label>

        <Input
          id="password"
          v-model="password"
          type="password"
          class="block mt-1 w-full"
          required
          auto-complete="current-password"
        />
      </div>

      <div class="block mt-4">
        <label htmlFor="remember_me" class="inline-flex items-center">
          <input
            id="remember_me"
            v-model="remember"
            type="checkbox"
            name="remember"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

          <span class="ml-2 text-gray-600">Remember me</span>
        </label>
      </div>

      <div class="flex items-center justify-end mt-4">
        <NuxtLink
          to="/forgot-password"
          class="underline text-sm text-gray-600 hover:text-gray-900"
        >
          Forgot your password?
        </NuxtLink>

        <Button class="ml-3">Login</Button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // middleware: "auth",
  // auth: "guest",
  data: () => ({
    errors: [],
    email: "",
    password: "",
    remember: false,
  }),
  head() {
    return {
      title: "Sign In — ergodnc",
    };
  },
  methods: {
    submitForm(event) {
      //     this.errors = [];
      //     this.$auth.loginWith('cookie', {
      //         data: {
      //             email: this.email,
      //             password: this.password,
      //             remember: this.remember
      //         },
      //     }).then(() => this.$router.push('/'))
      //         .catch(error => {
      //             if (error.response.status !== 422) throw error
      //             this.errors = Object.values(error.response.data.errors).flat();
      //         })
    },
  },
};
</script>