const I18N = {
    useCookie: false,
    alwaysRedirect: true,
    locales: [
        {
            code: 'fr',
            iso: 'fr-FR',
            name: 'Français',
            file: 'fr/index.js'
        },
        {
            code: 'ru',
            iso: 'ru-RU',
            name: 'Русский',
            file: 'ru/index.js'
        }
    ],
    lazy: true,
    seo: false,
    langDir: '/locales/',
    defaultLocale: 'fr',
    parsePages: false
}

module.exports = {
    I18N
}
