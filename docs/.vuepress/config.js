const path = require('path')
module.exports = {
    title: '优秀笔记',
    description: '沉淀、分享、成长，让自己和他人都能有所收获！',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: './public/favicon.ico',
            },
        ],
    ],
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
            {
                text: 'Node',
                items: [
                    { text: 'Api', link: '/node/Api/' },
                    { text: 'Koa', link: '/node/Koa/' },
                ],
            },
            { text: '面试问题', link: '/interview/' },
            {
                text: '杂谈',
                items: [
                    { text: 'Vuepress', link: '/gossip/vuepress/' },
                    { text: 'MongoDB', link: '/gossip/mongodb/' },
                ],
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
            '/conclusion/': [
                {
                    title: '2022',
                    collapsable: false,
                    children: ['/conclusion/', '/conclusion/January/', '/conclusion/February/'],
                },
            ],
            '/quotes/': [
                {
                    title: '2022',
                    collapsable: false,
                    children: ['/quotes/', '/quotes/January/', '/quotes/February/'],
                },
            ],
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@public': './public',
                '@vuepress': path.join(__dirname, './public/images'),
            },
        },
    },
}
