# XDNMBwatcher

通过 Cloudflare Worker 进行 X岛匿名版 订阅监控并推送

实际使用中的推送仅为telegram bot，其他推送方式久未使用

原型是 [inkrss](https://github.com/pureink/inkrss) ，为在 CloudFlare 上的 RSS 订阅器，俺寻思新串也像rss，就fork并各种俺寻思开搓

现在使用订阅的api进行监控，应该对上游服务器压力并不太大（~10req/min）。

现已支持telegraph预览等一堆各种各样的功能