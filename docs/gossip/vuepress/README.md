# Vuepress 搭建教程

1. 第一步，初始化项目

`npm init`

2. 第二步，安装 vuepress

`npm install -D vuepress`

3. 创建你的第一篇文档

`mkdir docs && echo '# Hello VuePress' > docs/README.md`

4. 在 package.json 中添加一些 scripts

```js
  "scripts": {
    "dev": "vuepress dev docs --temp .temp",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
  },
```

5. 在本地启动服务器

```js
// 修改内容不会自动刷新，必须重启
npm run docs:dev
// 修改项目会实时刷新，无需重启
npm run dev
```

-   VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。
