module.exports = {
    title: '优秀笔记',
    description: '沉淀、分享、成长，让自己和他人都能有所收获！',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: './favicon.ico',
            },
        ],
    ],
    markdown: {
        lineNumbers: true,
        toc: {
            includeLevel: [1, 2, 3],
        },
    },
    themeConfig: {
        // 添加导航栏：页面首页的右上角
        nav: [
            { text: '指南', link: '/guide/' },
            {
                text: '前端',
                items: [
                    { text: 'Html', link: '/web-frame/html/' },
                    { text: 'Css', link: '/web-frame/Css/' },
                    { text: 'JavaScript', link: '/web-frame/JavaScript/' },
                ],
            },
            // {
            //     text: 'Node',
            //     items: [
            //         { text: 'Api', link: '/node/Api/' },
            //         { text: 'Koa', link: '/node/Koa/' },
            //     ],
            // },
            { text: '面试问题', link: '/interview/' },
            {
                text: '杂谈',
                link: '/gossip/',
                // items: [
                //     { text: 'Vuepress', link: '/gossip/vuepress/' },
                //     { text: 'MongoDB', link: '/gossip/mongodb/' },
                //     { text: 'AntV', link: '/gossip/AntV/' },
                // ],
            },
            { text: '总结', link: '/conclusion/' },
            { text: '励志名言', link: '/quotes/' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '基础',
                    collapsable: false,
                    children: ['/guide/'],
                },
            ],
            '/gossip/': [
                {
                    title: 'AntV',
                    collapsable: false,
                    children: ['/gossip/AntV/'],
                },
                {
                    title: 'MongoDB',
                    collapsable: false,
                    children: ['/gossip/mongodb/'],
                },
                {
                    title: 'VuePress',
                    collapsable: false,
                    children: ['/gossip/vuepress/', '/gossip/vuepress/deployment'],
                },
            ],
            '/conclusion/': [
                {
                    title: '2022',
                    collapsable: false,
                    children: ['/conclusion/2022/January/', '/conclusion/2022/February/'],
                },
                {
                    title: '2021',
                    collapsable: false,
                    children: ['/conclusion/2021/'],
                },
            ],
            '/quotes/': [
                {
                    title: '2022',
                    collapsable: false,
                    children: ['/quotes/2022/January/', '/quotes/2022/February/'],
                },
                {
                    title: '2021',
                    collapsable: false,
                    children: ['/quotes/2021/'],
                },
            ],
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@public': './public',
            },
        },
    },
}
