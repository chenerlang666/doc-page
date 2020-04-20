---
id: project3
title: project-with-docs
---

| [Github](https://github.com/Airine/project-with-docs) | Docs | 2020-03 |
| :-: | :-: | :-: |

<br/>

为了规范化每个项目的文档，创建了`project-with-docs`这个仓库，新创建的项目可以选择使用这个模板。模板本身也需要不断完善。

## 文档

_请熟悉[docusaurus]后再进行文档的修改和部署_

1. 已部署的文档位于`gh-pages`分支
    请不要修改`gh-pages`分支的任何内容，因为都是由`yarn deploy`命令生成的。

2. 先在本地`yarn start`确定无异常情况后`deploy`

### 文档修改部署

```bash
cd docs
```

打开`docusaurus.config.js`

1. 用搜索将 `Project Name` 换成项目名称。

2. 用搜索将 `project-with-docs` 换成repo名称。

# GitHub Actions

```
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
        with:
          persist-credentials: false

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          cd docs
          npm install
          npm run build
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: docs/build # The folder the action should deploy.
```
