
import i18n from './config/18ln.js'
export default {
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - PowerPac Myanmar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{ src: 'https://unpkg.com/ionicons/dist/ionicons.js', body: true }]
  },
  generate: {
    fallback: true,
    minify: {
      collapseWhitespace: false
    }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/css/reset.css',
    'aos/dist/aos.css',
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '@/plugins/aos.js', ssr: false },
    { src: '@/plugins/antd.js', ssr: false },
    { src: '@/plugins/vue2-filters.js', ssr: false }
  ],

  // Auto import compone  nts (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'English'
          },
          {
            code: 'mm',
            name: 'Myanmar'
          }
        ],
        vueI18n: i18n
      }
    ]

  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-carousel'],
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
}
