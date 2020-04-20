---
id: github-actions
title: 如何使用GitHub Actions自动部署网页到GitHub Pages
author: 一口闰心
author_title: Engineer @ CAN Studio
author_url: https://github.com/airine
author_image_url: https://avatars0.githubusercontent.com/u/21023948?s=400&u=e58fbc5dd11690f1bfa846950fd988017a24de81&v=4
tags: [github, blog, docusaurus]
draft: false
---

一般来说，部署一个静态网站到[GitHub Pages]()需要以下步骤（Node.js）:
```shell
1. yarn / npm install           # 安装依赖 (optional)
2. yarn build / npm run build   # 生成静态文件
3. yarn deploy / npm run deploy # 部署到 GitHub Pages (如果支持的话)
```
使用GitHub Pages后:
```shell
1. git commit -m "write a blog" / make some modifications
2. git push
```

<!--truncate-->

## 步骤

1. GitHub Actions是什么？
2. 获取GitHub Token
3. 设置Secrets
4. 创建一个GitHub Actions Workflow
5. 观察GitHub Actions和网页结果

## GitHub Actions是什么？

[GitHub Actions](https://github.com/features/actions), 是GitHub提供的[持续集成](http://www.ruanyifeng.com/blog/2015/09/continuous-integration.html)（Continuous integration，简称CI）服务。GitHub通过提供虚拟机（应该是docker container），可以在用户制定的操作系统上运行用户指定的命令。从而达到持续集成的效果。持续集成由很多操作组成，比如抓取代码、运行测试、登录服务器、部署发布等等。GitHub把这些操作称为actions。GitHub还提供了一个[marketplace](https://github.com/marketplace)用来分享每个人的GitHub Actions，这样就省去了很多编写时间。

本文需要用到的Actions是[`JamesIves/github-pages-deploy-action`](https://github.com/JamesIves/github-pages-deploy-action)，也是第三方实现的Actions。

### GitHub Actions 术语

（1）workflow （工作流程）：持续集成一次运行的过程，就是一个 workflow。
（2）job （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。
（3）step（步骤）：每个 job 由多个 step 构成，一步步完成。
（4）action （动作）：每个 step 可以依次执行一个或多个命令（action）。

### workflow 文件

GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的`.github/workflows`目录。
workflow 文件采用 `YAML` 格式，文件名可以任意取，但是后缀名统一为`.yml`，比如`foo.yml`。一个库可以有多个 workflow 文件。GitHub 只要发现`.github/workflows`目录里面有`.yml`文件，就会自动运行该文件。

## 获取GitHub Token

...未完待续

## 推荐阅读

1. [如何在10分钟内用Docusaurus部署个人网站+博客](/blog/home-page)
2. [如何让谷歌搜索到个人网站](/blog/google-search)
3. 如何解决Docusaurus下gitalk无法加载评论的问题
4. 如何为Docusaurus个人网站添加站内搜索
5. [转-如何给Docusaurus添加Gitalk插件](/blog/gitalk)
6. [**Docusaurus.v2官方文档**](https://v2.docusaurus.io/)

## Reference

1. https://segmentfault.com/a/1190000021815477
2. http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html