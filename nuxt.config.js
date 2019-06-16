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
    title: "REDONE",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "Random stuff shoved into a bot. Cool amiright?",
        name: "REDONE",
        content: "Random stuff shoved into a bot. Cool amiright?",
        description: "Random stuff shoved into a bot. Cool amiright?"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECElEQVR42u1VXUxbZRjehRdeeuGFF7sgmfFCSjmcUzilhbbQv9Hf0z9cW2ihLS1QfrpSNmeGKA4l0cXE35EYZwgxm/NnmwQ0kbmRGGMyY6JGjboYNWYXeKND+ZFyPE/deyRwOvDKm77Jl9N+3/O9v8/7fgcOVKQiFanIHvIAx917wus982os+tPlTHLt7Z6EeDGd/Gsm3rk87hPOV1fX32cyme7qarWGngoF587GOn+8kOr+43I6uYrvK7HoDycF/0yrTnfoPxvPOZ3PLmYzm98ez4vl1kJvT/GNVPfaN8eOinfCLQ30bRU8ngtwdl/GxwTfu6T0Ujopjno8xQ6z5SbWMY934+Ph7C4jc5mU+HR7SMy7XOJgm0N8zOcr3aVz6Cu4XEt7Gs/YD5/+spD754Lbvaaq5UZiFstA2m7PIgKGYe5p0zcvfn3bwa9Gc6KzyXCjplaTUas1KtIDnEqtSWbs9l+hD9jPRobEoLGlv6xx1HROSivA437fuqquTiNFdAnOYHn0xjHgYGi+NyVH1221zb+ZSqxiufWG9p06x/zCCmElrvxS1oFhl+scQB8N9YsM2zCKvRci4VW63KrVPVFSytQzwBD2tXhniSuItJlvHNup16prniQd5xJdIsit6MCZjujvAE34/etVVaa7AaQ6wlANo/ECN+J2z5PCR/2+zU9yA7JyZG1XZmtZO/Hm2mCfWF3LNe0y/iDL3v9+f6YE6rLaFrGnYjQm1A17s90xKQPatslgYOnzkWGZoAFjyzVyZiLgX1EKDHq2Zwz/FUCck8iCVA85nC9ezfZukXIYpXN8p0JBkWUbJk94hesyF2z2JWUH/tWNblHKklRXLk6K8Lvg9nyn1NNwJHvYsaFW15lx77nwkVt0pucbH1dyIG62PkOYlyJhER2ypwMwMBEIyARM2ewrC309siPHvZ4r4AimI/5/mO0VEamSA0+GAt/TvbzTrdwFNQwbpeFj4Zsext50NLJOKa9m2KzXaFwgDMhUxzXkr+cHZY7oeV7r0zV7t+v1GPUtRFLwSavRjis6gLqgPgBKA+iqlKYqihhfEAdEne6IFimaU/7gMv0+/VD75uuJ2K3zia4tajMTbzqIPcI8Igh/lm1BTLmTgvAbgO/1pYtxs22WiDPdEZF7VzAY36L9LwrDckmuZDMlwk61h4oqjjskBTElPVwbdC7NilJp7ziGG3k+98HtVty+Rt3uZcKo1fxBzAklgn4qleNiT3KTykLr+XAYHXN0Xw+RpbHpHXhLtcZw2XkZA+lUIFCkTCgtnIEXkVbzz+XIWVZwQXqEXtaw/AzIqYTBe1DDcGedBsPNuMW2MuhwFvEKDrQ5Vo+0mG9o6xtm4ei+n+CKVKQi/4f8DZ++CHEvMmN7AAAAAElFTkSuQmCC"
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
  }
};
