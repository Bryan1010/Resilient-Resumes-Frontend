const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
    }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#007dff ',
    height: '10px',
    continuous: true
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/sentry'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.RR_API // || 'http://localhost:' + process.env.PORT
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: '#093162',
      secondary: '#FFFFFF',
      tertiary: '#007dff',
      // primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      // secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  /*
   ** Sentry IO configuration (online logging)
   */
  sentry: {
    dsn: process.env.SENTRYDSN || 'https://a97633e001c24357993675e5cce33aa3@sentry.io/1506607',
    config: {

    }
  },

  env: {
    baseUrl: process.env.BASE_URL, // || 'http://localhost:' + process.env.PORT,
    statusCodes: {
      error: 'error',
      failed: 'failed',
      success: 'success'
    }
  },

  server: {
    port: process.env.PORT || 8000 // default: 3000
  },

  statusCodes: {
    error: 'error',
    failed: 'failed',
    success: 'success'
  }

}
