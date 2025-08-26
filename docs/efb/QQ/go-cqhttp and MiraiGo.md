---
title: Go-cqhttp/MiraiGo
---

# Go-cqhttp / MiraiGo

## 不是风控了么，你咋还能用

主要是发消息被风控了，只要不考虑发，那就问题不大。

使用手表协议的话收消息还算ok，但会漏消息。但如果把每一条新进来的都标记已读就不会漏。

## 为什么你要Fork？

因为虽然手表协议还能接消息，但很多的解析已经出问题了。比如各种图片，经常就解析不出来，或者缺这缺那的。于是折腾了一下做了fork。

## Fork在哪？

其实主要改的是 go-cqhttp 底下的 MiraiGo，Fork在了 <https://github.com/Ovler-Young/MiraiGo>。当然 go-cqhttp 这层wrapper也需要改一下上游，于是也fork了，但实际没做代码修改

## 改了啥？

请看 [Diff](https://github.com/Mrs4s/MiraiGo/compare/a702bde3e128d7b5759d5b34345d84cd8761dfd6...Ovler-Young:MiraiGo:master). 

### 解决了新版本qq发的图片按之前没法解析的问题，

还有获取服务器ip的那个api很不稳定，原版本获取失败就panic了，没法进行到下一步，其实感觉那个api已经挂了，目前 [唯一开着的pr](https://github.com/Mrs4s/MiraiGo/pull/351) 就是`fix: 修复 SsoAddr 地址为空导致报错的问题`但似乎一直没人管，但实际上panic的位置不一样。

### 新版本qq发的图片

参考了 LagrangeDev 那边的实现，但实际链接是自己抓的拼出来的，大致上能用，但还存在另一个问题：

私聊发的图片的appid是1406，群聊发的是1407，但是私聊的消息合并转发到群聊之后，appid需要改为1407，群聊的消息合并转发之后appid需要改为1406，目前暂时没找着到底哪里表现了这条消息实质上在私聊还是在群聊，于是存在，把私聊的图片合并转发到群之后，解析就爆炸了。
