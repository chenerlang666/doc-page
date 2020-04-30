---
id: flutter
title: MacOS搭建Flutter开发环境 + Android Studio + Xcode
author: 一口闰心
author_title: Engineer @ CAN Studio
author_url: https://github.com/airine
author_image_url: https://avatars0.githubusercontent.com/u/21023948?s=400&u=e58fbc5dd11690f1bfa846950fd988017a24de81&v=4
tags: [flutter]
draft: false
---
![JOp4BQ.png](https://s1.ax1x.com/2020/05/01/JOp4BQ.png)
<!--truncate-->
注：这篇文章基本上搬运了[官方文档](https://flutterchina.club/setup-macos/)，并根据搭建过程进行一些增减。

## 系统要求

要安装并运行Flutter，您的开发环境必须满足以下最低要求:
- 操作系统: macOS (64-bit)
- 磁盘空间: 700 MB (不包括Xcode或Android Studio的磁盘空间）.
- 工具: Flutter 依赖下面这些命令行工具:
    `bash`, `mkdir`, `rm`, `git`, `curl`, `unzip`, `which`

## 获取Flutter SDK

1. 去flutter官网下载其最新可用的安装包，转到[下载页](https://flutter.dev/docs/development/tools/sdk/releases?tab=macos#macos) 

2. 去github.com下载，转到[下载页](https://github.com/flutter/flutter/releases)

解压安装包到你想安装的目录，如：

```bash
cd ~/development
unzip ~/Downloads/flutter_macos_v0.5.1-beta.zip
```

(如果zip下载完成后自动解压)

```bash
cd ~/development
mv ~/Downloads/flutter/ .
```

添加flutter相关工具到`$PATH`中(一次性)：

```bash
export PATH=`pwd`/flutter/bin:$PATH
```

## 更新环境变量

```bash
echo "export PATH=`pwd`/flutter/bin:\\$PATH" >> ~/.bash_profile
```

1. 运行 source $HOME/.bash_profile 刷新当前终端窗口.

:::info 注意: 如果你使用的是zsh，终端启动时 ~/.bash_profile 将不会被加载，解决办法就是修改 ~/.zshrc ，在其中添加：source ~/.bash_profile
:::

2. 通过运行`echo`命令验证目录`flutter/bin`是否在已经在PATH中:

```bash
echo $PATH
```

## 运行 flutter doctor

运行以下命令查看是否需要安装其它依赖项来完成安装：

```bash
flutter doctor
```

该命令检查您的环境并在终端窗口中显示报告。Dart SDK已经在捆绑在Flutter里了，没有必要单独安装Dart。 仔细检查命令行输出以获取可能需要安装的其他软件或进一步需要执行的任务（以粗体显示）

例如:

```
(base) ➜  development flutter doctor
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, v1.12.13+hotfix.9, on Mac OS X 10.15.4 19E287, locale zh-Hans-CN)
[✗] Android toolchain - develop for Android devices
    ✗ Unable to locate Android SDK.
      Install Android Studio from: https://developer.android.com/studio/index.html
      On first launch it will assist you in installing the Android SDK components.
      (or visit https://flutter.dev/setup/#android-setup for detailed instructions).
      If the Android SDK has been installed to a custom location, set ANDROID_HOME to that location.
      You may also want to add it to your PATH environment variable.
...
! Doctor found issues in 6 categories.
```

这个Android toolchain问题就是没有安装Android SDK，或没有指定Android SDK的路径。在Android Studio第一次启动时，它将协助你安装Android SDK组件。

## 安装 Flutter 和 Dart 插件


## 推荐阅读

1. 用flutter写一个“属于男人”的app

## Reference

1. [入门: 在macOS上搭建Flutter开发环境](https://flutterchina.club/setup-macos/)
2. 