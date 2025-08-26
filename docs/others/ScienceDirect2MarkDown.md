# ScienceDirect2MarkDown

> A Python tool to convert ScienceDirect JSON content to Markdown format, supporting text styling, math formulas, tables, and figures.

## 来源

某教科书在 ScienceDirect 上通过学校账户能看，也能网页翻译，也能导出pdf，但是存在导出的pdf无法翻译的问题。

我当时想偷懒，中英双语看那个教材，就想着能不能直接把 ScienceDirect 上的内容导出来，然后再进行翻译。

一番折腾发现有api可以获取json格式的内容，包含了所有需要的资料，又刚好学了streamlit，就练手写了这个玩意

## 用法

不用自己部署，打开 [streamlit](https://sciencedirect2markdown.streamlit.app) （可能需要`Get this app back up` 一下）就可以进行转换了。

去Science Direct上打开你想要转的文章/术/Anything，F12，网络活动搜索 `body`，刷新，选择第一个json的，全选复制，（推荐存成文件），再传到刚刚打开的streamlit页面上，点转换就行了。

可能存在部分特殊格式没覆盖到，欢迎pr
