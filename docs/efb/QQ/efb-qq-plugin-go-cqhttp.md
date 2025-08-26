---
title: efb-qq-plugin-go-cqhttp
description: efb-qq-plugin-go-cqhttp相关
---

# EFB-QQ-Plugin

Fork的Repo 在 <https://github.com/Ovler-Young/efb-qq-plugin-go-cqhttp>

做的更改大概就是这个diff <https://github.com/ehForwarderBot/efb-qq-plugin-go-cqhttp/compare/master...Ovler-Young:efb-qq-plugin-go-cqhttp:dev>

主要是：
1. 自动标记为已读的功能，暂时解决部分QQ客户端（特别是手表协议下）在未读消息多的时候丢消息的问题
2. 处理自己发送的消息（这个是monkeypatch的，但上游也没更新了还蛮稳定的……）
3. 大文件的话只发placeholder，避免到telegram后还是发不出来，但会吃很多内存的问题
4. 更新了一批qq的json模式的解析
5. 因为qq的大量文件/图片的url是https://ip的格式，但返回的证书又不对，就加了一下规则，https://ip的情况下不验证证书
6. 给自己fork的miraiGo加了个图片获取错误换appid的功能，毕竟转发那玩意没搞定

都是我在使用中遇到问题的解决

todo：

有时会报错file not found有时又不会，部分图片还是有问题