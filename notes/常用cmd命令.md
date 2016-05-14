# 常用cmd命令
【windows】下，常用的cmd命令收集

## 基本操作
``` sh
    $ set path=%PATH%;%CD% # 将当前目录添加到系统环境变量（仅对当前进程有效）
    $ mklink /D <target> <orgin> # 建立orgin的链接到target
```

## 文件目录操作
```
    $ dir # 显示当前目录详细信息
    $ dir /b # 显示当前目录下文件及文件夹列表
    $ dir /ad/s/b # 显示当前目录下所有文件夹及子文件夹列表
    $ dir /ad/s/b > <filename> # 将当前目录下所有文件夹及子文件夹列表写入指定文件内
```

## 进程操作
``` sh
    $ taskkill /f /im <name.exe> # 根据进程名关闭进程
    $ taskkill /f /pid <pid> # 根据pid关闭进程
```

## 网络操作
``` sh
    $ ipconfig # 查看ip基本设置
    $ ipconfig /all # 查看ip详细设置
    $ ipconfig /flushdns # 清除 DNS 解析程序缓存
    $ ipconfig /displaydns # 显示 DNS 解析程序缓存的内容
    $ netstat -a # 显示所有的端口连接
    $ netstat -b # 显示在创建网络连接和侦听端口时所涉及的可执行程序
    $ netstat -n # 显示已创建的有效连接，并以数字的形式显示本地地址和端口号
    $ netstat -o # 显示与每个连接相关的所属进程 ID
    $ netstat -s # 显示每个协议的各类统计数据，查看网络存在的连接，显示数据包的接收和发送情况
    $ netstat -e # 显示关于以太网的统计数据，包括传送的字节数、数据包、错误等
    $ netstat -r # 显示关于路由表的信息，还显示当前的有效连接
    $ netstat -ao | findstr <no> # 查询指定端口的本地连接
    $ netstat -ano | findstr <no> # 查询指定端口的全部连接
```
