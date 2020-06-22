export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],

  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-156261352-1",
        debug: {
          enabled: true,
          sendHitTask: true
        }
      }
    ]
  ],

  serverMiddleware: [
    { path: "/api/logger", handler: "~/api/logger.js" },
    { path: "/api/coupons", handler: "~/api/coupons.js" },
    { path: "/api/admin-coupons", handler: "~/api/adminCoupons.js" },
    { path: "/api/update-coupon", handler: "~/api/updateCoupon.js" },
    { path: "/api/login", handler: "~/api/login.js" },
    { path: "/api/chart", handler: "~/api/chart.js" },
    { path: "/api/submit", handler: "~/api/submitCoupon.js" }
  ]
};
