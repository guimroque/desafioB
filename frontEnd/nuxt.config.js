export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
    },
    script:[
      {src: 'https://kit.fontawesome.com/a076d05399.js'}
    ],
    modules:[
      '@nuxtjs/axios',
      ],
      axios:{

      },
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  css: [
    'bulma/css/bulma.css',
    '~/css/main.css',
    '~/css/add.css',
    '~/css/footernav.css',
    '~/css/index.css'
  ]
}