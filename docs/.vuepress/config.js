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
            { text: '首页', link: '/' },
            { text: '前端', link: '/web-frame/' },
            { text: 'Node', link: '/node/nest/nest' },
            { text: '面试问题', link: '/interview/' },
            { text: 'Git', link: '/git/' },
            { text: 'Linux', link: '/linux/' },
            { text: 'Mysql', link: '/mysql/' },
            { text: 'Docker', link: '/docker/' },
            {
                text: '小乔的前端博客',
                items: [
                    { text: 'Github', link: 'https://github.com/qiaochunmei' },
                    { text: '掘金', link: 'https://juejin.cn/user/43636195606333/posts' },
                ],
            },
        ],
        sidebar: [
            {
                title: '基础知识',
                path: '/',
                collapsable: false, // 不折叠
                children: [{ title: '必会', path: '/' }],
            },
        ],
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
