module.exports = {
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'ru-RU', // this will be set as the lang attribute on <html>
            title: 'AcquiroPay',
            description: 'Документация платежной системы AcquiroPay'
        },
    },
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 1,
        repo: 'acquiropay/docs',
        sidebar: [
            {
                title: 'Платежный шлюз',
                children: [
                    '/gateway/',
                    '/gateway/auth',
                    '/gateway/complete-auth',
                    '/gateway/charge',
                    '/gateway/cancel',
                    '/gateway/status',
                    '/gateway/recurrent',
                    '/gateway/p2p',
                    '/gateway/card-binding',
                    '/gateway/card-init',
                ]
            },
        ]
    }
};