---
id: google-search
title: 如何让谷歌搜索到个人网站
author: 一口闰心
author_title: Engineer @ CAN Studio
author_url: https://github.com/airine
author_image_url: https://avatars0.githubusercontent.com/u/21023948?s=400&u=e58fbc5dd11690f1bfa846950fd988017a24de81&v=4
tags: [google, docusaurus]
---

# 如何让Google收录（可以搜索到）你的个人网站

在有了个人网站以后，总希望更多的人来踩一踩看一看。也希望自己写的博客能够真的分享被别人搜索到，达到博客应有的分享功能。但是了解以后才发现：**网站能够被搜索引擎搜索到需要自己的网站被搜索引擎收录**。一般来说，能被搜索引擎所收录有三种途径：

1. 交钱：一次点击 _$0.05 USD_， 适用于商业推广，并会现实在右栏（广告栏）。
2. 网站本身知名度高，影响力高：Google 对搜索结果的排名目前使用`page rank`算法，简单来说越多影响力大的知名网站能够导向你的网站，你的网站的得分就越高，就会排在前面。如果你的网站的影响力已经很大，搜索引擎会主动去添加索引。
3. 申请：自己主动向搜索引擎添加自己的链接，请求搜索引擎使用爬虫检索你的网站。

<!--truncate-->

### 步骤

1. [查看网站是否被Google收录](google-search#1查看网站是否被google收录) （应该没有）
2. [提交URL并验证所有权](google-search#2提交url并验证所有权)
3. [添加Sitemaps给爬虫加个速](google-search#3添加Sitemaps给爬虫加个速)
4. [手动请求（重新索引）](google-search#4手动请求（重新索引）)
5. [最终效果展示](google-search#5最终效果展示)
6. [如果你和我一样使用Docusaurus](google-search#6如果你和我一样使用docusaurus)

## 1.查看网站是否被Google收录[👇](google-search#2提交url并验证所有权)

查看网站是否被 _Google_ 收录很简单：打开[Google搜索](https://google.com)，在搜索框内输入

```shell
site:<your-websit-url> # site:blog.aaron-xin.tech
```

### 如果没有被收录

![没有被收录应该显示的图片](/img/google/not_include.png)

很遗憾，你的网站没有被谷歌收录。没关系，做完下面的步骤，在30分钟左右，就可以通过Google搜索到你网站的内容了。

### 如果已经被收录

![已经被收录应该显示的图片](/img/google/included.png)

恭喜你，你的网站已经被谷歌收录。但是出于可控考虑，你仍可以继续看下面的步骤，证明你的所有权以及提高Google对你的网站的检索效率。

## 2.提交URL并验证所有权[👇](google-search#3添加sitemaps给爬虫加个速)

可能你已经观察到了，无论有没有被Google收录，Google都会在第一条显示[Google Search Console](https://search.google.com/search-console?hl=zh-CN)。个人猜测，这是出于安全与隐私方面的考虑。Google把是否允许收录网站的权利交给真正的站主。

1. 点击左上角添加资源

import Img from 'react-image'

<Img src="/img/google/gsc_add_res.png" width="200"/>

2. 建议选择右边的网址前缀

<Img src="/img/google/choose_res.png" width="600"/>

3. 建议选择HTML文件验证方法

    一共有5种验证方法：

    1. HTML 文件：通过在网址根目录添加一个随机生成的`.html`文件验证。优点：不需要改动原有代码。
    2. HTML 标记：通过向首页添加元标记，将元标记复制到第一个`<head>`中验证。缺点：需要改动原有`index.html`
    3. Google Analytics：注册Google Analytics账号后将`analytics.js`或`gtag.js`代码段添加到`<head>`中。缺点：麻烦，并需要改动原有代码。优点：可以有新的feature。
    4. Google Tag Manager：同上。
    5. DNS 设置：将TXT记录复制到DNS配置中。缺点：麻烦，响应慢（最长1天），有的服务商很难找到DNS配置入口。

:::info 完成验证后也不要移除文件或者添加的代码片段
:::


成功以后会显示

<Img src="/img/google/success_res.png" width="500"/>

## 3.添加Sitemaps给爬虫加个速[👇](google-search#4手动请求（重新索引）)

Sitemaps是什么？[站点地图](https://support.google.com/webmasters/answer/156184?hl=zh-Hans)(Site Map)是用来注明网站结构的文件，可以让搜索引擎的爬虫了解你的网站结构，以便于高效爬取内容，快速建立索引。Google 等搜索引擎会读取此文件，以便更加智能地抓取你的网站。站点地图会告诉 Google 你认为网站中的哪些网页和文件比较重要，还会提供与这些文件有关的重要信息：以网页为例，这些信息包括网页上次更新的时间、网页更改的频率，以及网页是否有其他语言版本。

你需不需要Sitemaps？如果你的网站上的网页链接得当，那么 Google 通常能够发现其中的大多数网页。即便如此，站点地图仍有助于我们更加高效地抓取规模更大、更复杂的网站或更特殊的文件。

:::success 由于 Google 是依靠复杂的算法安排抓取流程的，因此，使用站点地图并不能保证 Google 能抓取站点地图中的所有内容并将其编入索引。但在大多数情况下，您的网站都会因使用站点地图而受益，而绝不会受损。
:::

在以下情况下，可能需要站点地图：

1. 网站规模很大。
2. 网站有大量内容页归档，这些内容页之间互不关联或缺少有效链接。
3. 网站为新网站且指向该网站的外部链接不多。
4. 网站包含大量富媒体内容（视频、图片）或显示在 Google 新闻中。

在以下情况下，可能不需要站点地图：

1. 网站规模“较小”。规模较小是指网站上的网页数不超过 500 个。
2. 使用了简单网站托管服务，例如 Blogger 或 Wix。
3. 网站已在内部全面建立链接。这意味着，Google 可以沿着首页的链接找到网站上的所有重要网页。
4. 在索引中需要出现的媒体文件（视频、图片）或新闻页面不多。

### 通过XML-Sitemaps.com 生成

1. 点击进入[XML-Sitemaps.com](https://www.xml-sitemaps.com)，输入个人网站地址，点击start。

![sitemaps-index](/img/google/sitemaps-index.png)

2. 等待搜索完成

![sitemaps](/img/google/sitemaps.png)

预览一下：

![sitemaps-preview](/img/google/sitemaps-preview.png)

3. 下载`sitemap.xml`文件并上传到网站根目录下

![sitemaps-download](/img/google/sitemaps-download.png)

4. 在Google Search Console提交站点地图

![sitemaps-upload](/img/google/sitemaps-upload.png)

如果提交成功：

![sitemaps-upload](/img/google/sitemaps-upload-success.png)

## 4.手动请求（重新索引）[👇](google-search#5最终效果展示)

1. 将网站的地址再次输入到搜索框中

![gsc-index](/img/google/gsc-index.png)

2. 进入检索队列，1-2分钟后检索完成

![gsc-success](/img/google/gsc-success.png)

## 5.最终效果展示[👇](google-search#6如果你和我一样使用docusaurus)

最终就能达到在站点下搜索的功能了。随着网站的影响力不断增加，网站中的博客在Google搜索中的排名也会越来越靠前。

![result](/img/google/result.png)

## 6.如果你和我一样使用[Docusaurus](https://v2.docusaurus.io)

如果你和我一样使用[Docusaurus.v2](https://v2.docusaurus.io)做为个人网站，那么`sitemap.xml`的生成会更加简单，并且可以很轻松的接入`google-analytics`插件。

1. 使用`@docusaurus/preset-classic`设置（推荐）

    ``` javascript
    // docusaurus.config.js
    module.exports = {
      presets: [
        [
            '@docusaurus/preset-classic',
            {
                googleAnalytics: {
                    trackingID: 'UA-162317692-1',
                },
                gtag: {
                    trackingID: 'UA-162317692-1',
                },
                sitemap: {
                    cacheTime: 600 * 1000, // 600 sec - cache purge period
                    changefreq: 'weekly',
                    priority: 0.5,
                },
            },
        ],
    ],
    ```

2. 常规设置

    1. sitemap

    ```javascript
    // docusaurus.config.js
    module.exports = {
    plugins: [
        '@docusaurus/plugin-sitemap',
        {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: 'weekly',
        priority: 0.5,
        },
    ],
    };
    ```

    2. google-analytics

    ``` javascript
    // docusaurus.config.js
    module.exports = {
        plugins: ['@docusaurus/plugin-google-analytics'],
        themeConfig: {
            googleAnalytics: {
            trackingID: 'UA-141789564-1',
            // Optional fields.
            anonymizeIP: true, // Should IPs be anonymized?
            },
        },
    };
    ```

### 推荐阅读

1. 如何在10分钟内用Docusaurus部署个人网站+博客
2. 如何解决Docusaurus下gitalk无法加载评论的问题
3. 如何为Docusaurus个人网站添加站内搜索
4. [转-如何给Docusaurus添加Gitalk插件](/blog/gitalk)

## Reference

1. [让Google搜索到自己的博客](https://zoharandroid.github.io/2019-08-03-让谷歌搜索到自己的博客/) - [张芝宏](https://zoharandroid.github.io/)