module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'charline freelance developper ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'Charline creative developper', content: 'Charline freelance web developper and graphic designer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Podkova:700,800' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ca036a', height: '100px' },
  loadingIndicator: {
    name: 'circle',
    color: '#ca036a',
    background: 'white'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  plugins: ['./plugins/scrollto'],
}
