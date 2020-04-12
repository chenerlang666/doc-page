---
id: linksys-openwrt
title: Linksys WRT1900ACS 在刷OpenWrt和Linksys原固件时遇到的问题与解决方案
author: 一口闰心
author_title: Engineer @ CAN Studio
author_url: https://github.com/airine
author_image_url: https://avatars0.githubusercontent.com/u/21023948?s=400&u=e58fbc5dd11690f1bfa846950fd988017a24de81&v=4
tags: [wifi, linksys, openwrt]
---

这个博客用来记录在做[WiFi-bidding]()项目的时候，在路由器上面遇到的问题。

### 设备

Linksys WRT1900AS 开源双频千兆Wi-Fi路由器

![linksys](https://icdn4.digitaltrends.com/image/digitaltrends/linksys-wrt1900ac-999x666.jpg)

[OpenWRT.org](https://openwrt.org/zh/toh/linksys/wrt1900ac#固件镜像)

<!--truncate-->

## 如何从OpenWRT回到原厂固件

### 1. 恢复备份固件 （由 edgeman 贡献）

手动切换 WRT1900ac 废弃 flash 到第二 [备份] flash:

1. 长按复位按钮复位路由直到电源灯开始闪烁 {一般需要大约 15 秒}

    一旦电源灯停止闪烁, 用电源开关关闭路由器

2. 重新打开电源，这时候电源灯点亮.

    在其他灯点亮的瞬间, 用电源开关关闭路由器.

3. 重新打开电源，这时候电源灯点亮.

    在其他灯点亮的瞬间, 用电源开关关闭路由器.

4. 重新打开电源，这时候电源灯点亮.

    在其他灯点亮的瞬间, 用电源开关关闭路由器.

5. 重新打开电源，这时候电源灯点亮.
    
    让路由完全启动，现在应该使用了第二固件.

说明:该方法仅在 u-Boot 的 auto_recovery 为开启状态才有效. 从 r46690 开始，OpenWrt 默认开启 auto_recovery 并且让它一直保持开启状态. 任何旧版本会在启动时把它关闭.

- 当在不同的 OpenWRT 版本之间互刷的时候，始终推荐 **首先** 刷回原厂 (Linksys) 固件, 然后从原厂重新刷入新的 OpenWRT 固件（防止你在刷固件过程中遇到问题的预防措施）

### 2. 通过CLI回到另一个分区

通过`ssh`连接到路由器，密码就是登录OpenWRT时候的密码

```shell
ssh root@192.168.1.1
```

Linksys WRT1900ACS 有两个固件分区（partition）一个是Linksys原厂的固件，另一个留给开源固件。首先通过命令`fw_printenv boot_part`查看当前位于哪个分区。然后，另外一个分区即为Linksys原厂固件，通过`fw_setenv boot_part <#partition>`切换固件分区。最后，`reboot`使配置生效。
```shell
BusyBox v1.30.1 () built-in shell (ash)

  _______                     ________        __
 |       |.-----.-----.-----.|  |  |  |.----.|  |_
 |   -   ||  _  |  -__|     ||  |  |  ||   _||   _|
 |_______||   __|_____|__|__||________||__|  |____|
          |__| W I R E L E S S   F R E E D O M
 -----------------------------------------------------
 OpenWrt 19.07.2, r10947-65030d81f3
 -----------------------------------------------------
root@OpenWrt:~# fw_printenv boot_part
boot_part=1
root@OpenWrt:~# fw_setenv boot_part 2
root@OpenWrt:~# reboot
```

### 3. 重新下载Linksys固件并安装

1. 点击下载固件v.[1.1.8](http://www.protechs-online.com/downloads/FW_WRT1900AC_1.1.8.164461_prod.img)

2. 通过`scp`将固件镜像传到Linksys

```shell
$ scp FW_WRT1900AC_1.1.8.164461_prod.img root@192.168.1.1:/tmp/

FW_WRT1900AC_1.1.8.164461_prod.img              100%   25MB  10.9MB/s   00:02
```

3. 安装原厂固件

输入`sysupgrade`命令后，路由器将开始更新，并使用原厂固件重新启动。

```shell
BusyBox v1.30.1 () built-in shell (ash)

  _______                     ________        __
 |       |.-----.-----.-----.|  |  |  |.----.|  |_
 |   -   ||  _  |  -__|     ||  |  |  ||   _||   _|
 |_______||   __|_____|__|__||________||__|  |____|
          |__| W I R E L E S S   F R E E D O M
 -----------------------------------------------------
 OpenWrt 19.07.2, r10947-65030d81f3
 -----------------------------------------------------
root@OpenWrt:~# cd /tmp/
root@OpenWrt:/tmp# sysupgrade -n -F FW_WRT1900AC_1.1.8.164461_prod.img
Image metadata not found
Image check failed but --force given - will update anyway!
Commencing upgrade. Closing all shell sessions.
Connection to 192.168.1.1 closed by remote host.
Connection to 192.168.1.1 closed.
```

### 4. ！！！千万不要通过OpenWRT的Web UI直接刷Linksys固件

...TO BE CONTINUE