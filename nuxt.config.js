export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt Starter",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    script: [{ src: "/js/jquery.js" }, { src: "/js/theme.js" }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/style.css" },
      { rel: "stylesheet", type: "text/css", href: "/mobile.css" },
      { rel: "stylesheet", type: "text/css", href: "/reset.css" },
      { rel: "stylesheet", type: "text/css", href: "/bootstrap.css" },
      { rel: "stylesheet", type: "text/css", href: "/animate.css" },
      { rel: "stylesheet", type: "text/css", href: "/font-awesome.css" },
      { rel: "stylesheet", type: "text/css", href: "/owl-carousel.css" },
      { rel: "stylesheet", type: "text/css", href: "/owl-theme.css" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Roboto:400,700,500"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Lato:300,400"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
