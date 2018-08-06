module.exports = {
    dest: "public",
    locales: {
        '/': {
            lang: 'ru-RU',
            title: 'AcquiroPay',
            description: 'Документация платежной системы AcquiroPay'
        },
    },
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 0,
        repo: 'acquiropay/docs',
        lastUpdated: true,
        sidebar: [
            {
                title: 'Платежный шлюз',
                children: [
                    '/gateway/',
                    '/gateway/dictionary',
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
            {
                title: 'Платежная форма',
                children: [
                    '/checkout/',
                ],
            },
            {
                title: 'Мобильная коммерция',
                children: [
                    '/gateway-mcom/',
                    '/gateway-mcom/dictionary',
                    '/gateway-mcom/payment',
                    '/gateway-mcom/status',
                    '/gateway-mcom/refund',
                ],
            },
        ]
    }
};