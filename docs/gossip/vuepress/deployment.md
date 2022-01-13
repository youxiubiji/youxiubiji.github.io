# Vuepress 部署教程

### 手动打包上传部署

-   直接运行命令，把打包之后的文件上传值服务器即可

```js
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

### 部署到 GitHub Pages

-   在 `docs/.vuepress/config.js` 中设置正确的 base。

-   如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 base 默认即是 "/"。

-   如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 base 设置为 "`/<REPO>/`"。

-   在你的项目中，创建一个如下的 `deploy.sh` 文件（请自行判断去掉高亮行的注释）:

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

根据上面的部署路径填写对应的用户名

-   最后一步

需要运行.sh 命令，把你的代码上传到 github

### GitHub Pages and Github Actions

-   利用 github actions 功能，监听我们 push 代码自动打包部署

在项目根目录下的 .github/workflows 目录（没有的话，请手动创建一个）下创建一个 .yml 或者 .yaml 文件，如:deploy.yml;

```sh
name: Build and Deploy
on: #触发条件
    push:
        branches:
            - main
jobs: #规定要执行的任务
    build-and-deploy:
        runs-on: ubuntu-latest # 运行所需要的虚拟机环境
        steps:
            - name: Checkout  ️
              uses: actions/checkout@v2.3.1

            - name: Install and Build
              run: |
                  npm install
                  npm run docs:build

            - name: Deploy
              uses: JamesIves/github-pages-deploy-action@4.1.3
              with:
                  BRANCH: master
                  FOLDER: docs/.vuepress/dist
                  ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}

```

[参考链接](https://zhuanlan.zhihu.com/p/376817494)
