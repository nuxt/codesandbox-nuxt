
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  env: {
    strapiURI: process.env.STRAPI_URI || 'http://localhost:1337',
    authSalt: 'O0|i[],dPv-Ni77B_c;qMPB985OGG! ^(Ha?zITa@UhX7E}-o2x~O[9c95q:+Z>N'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { name: 'apple-mobile-web-app-title', content: 'APHP Internes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fffff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/generic/reset.scss',
    '@/assets/scss/generic/global.scss'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/functions/functions.scss',
      '@/assets/scss/variables/border.scss',
      '@/assets/scss/variables/colors.scss',
      '@/assets/scss/variables/spacing.scss',
      '@/assets/scss/variables/fontFamily.scss',
      '@/assets/scss/variables/fontSize.scss',
      '@/assets/scss/variables/fontWeight.scss',
      '@/assets/scss/variables/lineHeight.scss',
      '@/assets/scss/variables/transition.scss',
      '@/assets/scss/typography/typescale.scss',
      '@/assets/scss/typography/typography.scss',
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: process.env.STRAPI_URI ? `${process.env.STRAPI_URI}/graphql` : 'http://localhost:1337/graphql'
      }
    }
  },
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo'
  ],
  pwa: {
    manifest: {
      name: 'APHP Internes',
      short_name: 'APHP Internes',
      description: 'APHP Internes',
      lang: 'fr',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
    }
  },  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
}
