# 常用node命令
常用【node】命令备忘

## 基础命令
``` sh
    $ node # 开启REPL模式
    $ node --es_staging <app.js> # 以es6模式启动app.js
    $ node --harmony <app.js> # 以es6模式启动app.js
    $ node --harmony_destructuring <app.js> # 以扩展es6模式启动app.js
    $ node --help # 显示node的帮助信息
    $ node -v # 查看当前node版本
```

## npm 操作
``` sh
    $ npm init # 初始化包文件
    $ npm install # 安装package.json中所有的依赖模块
    $ npm install <module|folder|url> # 通过名称/目录/url安装模块
    $ npm install -g <module> # 全局安装模块
    $ npm install --save <module> # 安装模块到当前文件目录，并将该模块写入dependencies属性
    $ npm install --save-dev <module> # 安装模块到当前文件目录，并将该模块写入devDependencies属性
    $ npm view <module> # 查看模块的package.json文件
    $ npm view <module> dependencies # 查看包的依赖关系
    $ npm view <module> repository.url # 查看包的源文件地址
    $ npm view <module> engines # 查看包所依赖的Node的版本
    $ npm help folders # 查看npm使用的所有文件夹
    $ npm rebuild <module> # 用于更改包内容后进行重建
    $ npm outdated # 检查包是否已经过时，此命令会列出所有已经过时的包
    $ npm update # 更新当前项目下所有node模块
    $ npm update <module> # 更新当前项目下node模块
    $ npm update -g <module> # 更新全局node模块
    $ npm uninstall <module> # 卸载node模块
    $ npm list # 查看当前目录下已安装的node包
    $ npm ls # 查看当前文件夹安装的模块
    $ npm ls -g # 查看全局文件夹安装的模块
    $ npm search <module> # 查找是否存在node模块
    $ npm root # 查看当前包的安装路径
    $ npm root -g # 查看全局包的安装路径
    $ npm help # 查看帮助说明
    $ npm help <cmd> # 查看命令的帮助说明
    $ npm <cmd> -h # 显示命令帮助信息
    $ npm -l # 显示用户命令信息
    $ npm -v # 查看当前npm的版本
    $ npm cache ls # 显示所有缓存文件夹
    $ npm cache clean -f # 清除npm的缓存
    $ npm config set registry https://registry.npm.taobao.org # 设置远程镜像为国内淘宝库
    $ npm config set registry http://registry.npmjs.org # 还原远程镜像库
```

## repl 操作
``` sh
    \> ctrl + c # 退出当前终端。
    \> ctrl + c 按下两次 # 退出 node repl。
    \> ctrl + d # 退出 node repl.
    \> 向上/向下键 # 查看输入的历史命令
    \> tab键 # 列出当前命令
    \> .exit # 退出 node repl
    \> .help # 列出使用命令
    \> .break # 退出多行表达式
    \> .clear # 退出多行表达式
    \> .save filename # 保存当前的 node repl 会话到指定文件
    \> .load filename # 载入当前 node repl 会话的文件内容。
```

## package.json 设置
``` sh
    npm run <script> # 运行scripts中预定义的脚本
    scripts # 预定义脚本
        {
            "prestart": "<script>", # 预定义在脚本将会被加载时执行的脚本
            "start": "<script>", # 预定义在脚本加载时执行的脚本
            "install": "<script>", # 预定义在脚本加载时执行的脚本
            "uninstall": "<script>", # 预定义在npm uninstall <package>时执行的脚本
        }
```

## babel 操作
``` sh
    $ npm install --global babel-cli # 安装babel-cli到全局模块，以便能在命令行使用babel（不推荐）
    $ npm install --save-dev babel-cli # 安装babel-cli到单个模块，以便能在命令行使用babel（推荐）
    $ npm install --save-dev babel-register # 安装babel-register，以便能在项目中引用（require|import）
    $ npm install --save-dev babel-preset-es2015 # 预设babel转编译es6功能
    $ npm install --save-dev babel-preset-react # 预设babel转编译react功能
    $ npm install --save-dev babel-plugin-transform-es2015-arrow-functions # 单独安装es6的箭头函数转换器
    $ npm install --save-dev babel-polyfill # 安装polyfill到项目，以便在转换后require('babel/polyfill')做es5的支持;
    $ npm run build # 转换项目 （需在项目中配置相关命令）
    $ babel <source.js> # 转换指定的js文件（需全局安装babel）
    $ babel <source.js> --o <compiled.js> # 转换js文件并输入到指定文件
    $ babel <source.js> --out-file <compiled.js> # 转换js文件并输入到指定文件
    $ babel <source.js> --out-file <compiled.js> --source-maps # 转换js文件并输入到指定文件同时生成source map文件
    $ babel <source.js> --watch --out-file <compiled.js> # 监听并转换js文件并输入到指定文件
    $ babel <src> --out-dir <lib> # 转换src内的所有js到lib文件夹
    $ babel <src> --out-file <compiled.js> # 转换src内的所有js并合并到指定文件
    $ babel -v # 显示当前gulp版本
```

## gulp 操作
``` sh
    $ npm install -g gulp # 安装gulp到全局模块
    $ npm install --save-dev gulp # 安装gulp到当前项目文件夹
    $ gulp -v # 显示当前gulp版本

```

## express 操作
``` sh
    $ npm install --save-dev express # 安装express到本地项目
    $ npm install -g express # 安装express到全局
    $ npm install -g express-generator # 安装express-generator（生成器）到全局
