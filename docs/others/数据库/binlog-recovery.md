# Binlog Recovery

https://github.com/Ovler-Young/binlog-recovery

## 搓这玩意的原因

在批量删除非中v视频，通常情况下工作流是，SELECT  FROM 不是常见几个分区的视频，再找到共同的关键词，再DELETE带这些关键词的视频，这样循环，然后某一次筛选时忘了回退到SELECT ，就一次性删了5w来条数据。

还好有备份在，但备份有一周老。还有binlog在，但binlog没一直到一周前的。于是没法从正向replay。

但binlog包含了删库的所有操作，包括删除的那些行的全部实际数据。所以实质上数据还是可以恢复的。于是改了个脚本出来，几键反删库（x

## 来源

Fork 自 [bai1986](https://github.com/bai1986/1204)

## 主要修改
1. 更新了正则表达式，适配新版mysql
2. 增加了对特殊字符的处理
3. 增加了文档
4. 增加了GitHub Actions的编译