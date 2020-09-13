// const path = require('path')
// import fs from 'fs'
const { I18N } = require('./locales/i18n-nuxt-config')


// function getPaths (lang, type) {
//     let initial = lang
//     if (lang === 'en') { initial = '' }
//     return fs.readdirSync(path.resolve(__dirname, 'contents', `${lang}/${type}`))
//         .filter(filename => path.extname(filename) === '.md')
//         .map(filename => `${initial}/${type}/${path.parse(filename).name}`)
// }


export default {
    /*
    ** Rendering mode
    ** Doc: https://nuxtjs.org/api/configuration-mode
    */
    mode: 'universal',

    /*
    ** Headers of the page
    ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
    */
    head: {
        title: 'Nuxt.js starter for CSB',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Official Nuxt.js starter for CodeSandBox' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    /*
    ** Global CSS
    ** Doc: https://nuxtjs.org/api/configuration-css
    */
    css: [
        '@/assets/css/main.scss'
    ],

    styleResources: {
        scss: [
            '@/assets/css/utilities/_variables.scss',
            '@/assets/css/utilities/_helpers.scss',
            '@/assets/css/base/_grid.scss',
            '@/assets/css/base/_buttons.scss'
        ],
    },

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
        '@nuxtjs/style-resources',
        'nuxt-i18n',
        'nuxt-webfontloader'
    ],

    i18n:I18N,
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
        // eslint-disable-next-line no-unused-vars
        extend(config, ctx) {}
    },

    // generate: {
    //     routes: [
    //         '/es', '404'
    //     ]
    //         .concat(getPaths('es', 'blog'))
    //         .concat(getPaths('en', 'blog'))
    // }
};
