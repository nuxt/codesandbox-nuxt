export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@^1.5/dist/base.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@^1.5/dist/components.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@^1.5/dist/utilities.min.css"
      }
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: ["@tui-nuxt/editor"],
  tui: {
    editor: {}
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: []
};
