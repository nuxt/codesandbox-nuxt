export default {
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  modules: [
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ]
};
