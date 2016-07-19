# 如何在【[Sublime Text][]】中安装【[jshint][]】插件

## 准备
1. 安装【[node][]】环境
2. 安装【[Sublime Text][]】-【[Package Control][]】

## 安装流程
1. 安装【[jshint][]】
    在【[node][]】下运行以下命令，安装【[jshint][]】

    ``` sh
    $ npm install -g jshint
    ```

2. 安装【[Sublime Text][]】-【[SublimeLinter][]】插件

    > 1. 按下Ctrl+Shift+P调出命令面板
    > 2. 输入install 调出 Install Package 选项并回车，调出插件列表
    > 3. 在列表中搜索到 sublimelinter 点击并安装

3. 安装【[Sublime Text][]】-【[SublimeLinter-jshint][]】插件

    > 1. 按下Ctrl+Shift+P调出命令面板
    > 2. 输入install 调出 Install Package 选项并回车，调出插件列表
    > 3. 在列表中搜索到 sublimelinter-jshint 点击并安装

4. 配置【.jshintrc】文件
    依次选择【[Sublime Text][]】>【Tools】>【[SublimeLinter][]】>【Oper User Setting】打开【[SublimeLinter][]】配置文件，修改【linters】配置项如下：

    ``` json
    {
        "linters": {
            "jshint": {
                "@disable": false,
                "args": [
                    "--config",
                    "C:\\Users\\lifx\\.jshintrc"
                ],
                "excludes": []
            }
        }
    }
    ```

    其中【C:\\Users\\lifx\\.jshintrc】为你的本地【.jshintrc】配置文件路径（需转义）


[Sublime Text]: http://www.sublimetext.com/ "前往【Sublime Text】官方主页"
[Package Control]: https://packagecontrol.io/installation "查看【Package Control】安装指导"
[node]: https://nodejs.org/en/ "前往【nodejs】官方主页"
[jshint]: http://jshint.com/ "前往【jshint】官方主页"
[SublimeLinter]: https://github.com/SublimeLinter/SublimeLinter3 "查看【SublimeLinter】插件【github】项目"
[SublimeLinter-jshint]: https://github.com/SublimeLinter/SublimeLinter-jshint "查看【SublimeLinter-jshint】插件【github】项目"
