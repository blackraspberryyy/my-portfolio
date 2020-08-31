import colors from 'vuetify/es5/util/colors'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: 'server', // for servers
  target: 'static', // for github pages
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: 'Full Stack Developer | Juan Carlo Valencia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Juan Carlo Valencia's Portfolio Website.",
      },
      {
        name: 'keywords',
        content:
          'full stack developer,juan carlo valencia,blackraspberryyy,frontend,backend,mobile,development,resume,portfolio',
      },
      {
        property: 'og:title',
        content: 'Juan Carlo Valencia | Full Stack Developer',
      },
      { property: 'og:site_name', content: 'Juan Carlo Valencia' },
      {
        property: 'og:description',
        content: "Juan Carlo Valencia's Portfolio Website.",
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/logo.png' },
      { property: 'og:image:alt', content: "Juan Carlo Valencia's Logo" },
      { name: 'robots', content: 'index,follow' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Alata&family=Lato&family=PT+Serif:wght@700&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/breakpoint',
    '~/plugins/responsive-col',
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    { src: '~/plugins/vue2-scrollspy', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '#3498da',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          _black: colors.black,
          _white: '#ffffff',
          _grey: colors.grey.lighten4,
        },
        dark: {
          accent: colors.grey.lighten3,
          _black: colors.white,
          _white: colors.black,
          _grey: colors.grey.darken4,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
