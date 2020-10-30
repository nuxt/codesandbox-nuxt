console.log("Google Analytics Key: ", process.env.GOOGLE_ANALYTICS_ID);
const bodyParser = require("body-parser");
const cors = require("cors");
const redirectSSL = require("redirect-ssl");

export default {

  env: process.env,

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Heylocal",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "Heylocal",
        name: "Heylocal",
        content: "Heylocal"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto&display=swap"
      }
    ]
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
  plugins: [
    { src: "@/plugins/vue2-gmap.js", mode: "client" },
    { src: "@/plugins/vue-toasted.js", mode: "client" }
  ],

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: [/^vue2-google-maps($|\/)/]
  },

  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: process.env.GOOGLE_ANALYTICS_ID || "UA-156261352-1",
        debug: {
          enabled: true,
          sendHitTask: true
        }
      }
    ]
  ],

  serverMiddleware: [
    cors(),
    bodyParser.json({ limit: "50mb" }),
    redirectSSL.create({
      enabled: process.env.NODE_ENV === "production"
    }),
    { path: "/api/logger", handler: "~/api/logger.js" },
    { path: "/api/coupons", handler: "~/api/coupons.js" },
    { path: "/api/coupon", handler: "~/api/getCoupon.js" },
    { path: "/api/admin-coupons", handler: "~/api/adminCoupons.js" },
    { path: "/api/update-coupon", handler: "~/api/updateCoupon.js" },
    { path: "/api/login", handler: "~/api/login.js" },
    { path: "/api/submit", handler: "~/api/submitCoupon.js" },
    { path: "/api/admin-file", handler: "~/api/adminFile.js" },
    { path: "/api/raw-coupon", handler: "~/api/rawCoupon.js" },
    { path: "/api/save-coupon", handler: "~/api/saveCoupon.js" },
    { path: "/api/updateLegal", handler: "~/api/legal/saveText.js" },
    { path: "/api/getLegal", handler: "~/api/legal/getLegalTexts.js" },
    { path: "/api/removeLegal", handler: "~/api/legal/removeLegal.js" },
    "~/api/selectiveSSR"
  ]
};
