# 【webpack】打包配置解析
![webpack](https://webpack.github.io/assets/what-is-webpack.png 'webpack可以做什么')

【webpack】是一个模块打包工具，处理模块之间的依赖同时生成对应模块的静态资源。
* 【webpack】把项目中所有的静态文件都看作一个模块
* 模快之间存在着一些列的依赖
* 多页面的静态资源生成(打包之后生成多个静态文件，涉及到代码拆分)


## 一、【webpack】安装

* 全局安装（命令行工具）

``` sh
$ npm install -g webpack
```

* 安装到当前项目

``` sh
$ npm install --save-dev webpack
```

* 在项目中引用

``` javascript

// es6 引用
import webpack from 'webpack';

// commonjs 引用
const webpack = require('webpack');

```


## 二、【webpack】基本配置
【webpack】使用【webpack.config.js】作为配置文件（在项目下运行【webpack】命令时使用）。

``` javascript

'use strict';

module.exports = {
    entry: './js/app.js',
    output: {
        path: 'assets/',
        filename: 'app-[hash].js'
    },
    module : {
        loaders : [
            { test : /\.js$/, loader : 'babel' },
            { test : /\.css$/, loader : 'style!css' }
        ]
    }
}

```

## 三、【webpack】可配置项详解
【webpack】主要配置上有【[entry](#entry)】、【[output](#output)】、【[module](#module)】、【[resolve](#resolve)】、【[resolveLoader](#resolveLoader)】、【[externals](#externals)】、【[externals](#externals)】、【[plugins](#plugins)】等

### <a name="entry">1. 【entry】配置项</a>
【entry】支持配置单个或多个入口，也可以简单的将多个文件合并到一个入口文件

``` javascript
{
    ...

    // 单个入口文件
    entry: './js/app.js',

    // 多个入口文件
    entry: {
        app: './js/app.js',
        vendor: './js/vendor.js'
    },

    // 将多个文件合并成一个入口文件
    entry: ['./js/app.js', './js/vendor.js']
}

```

### <a name="output">2. 【output】配置项</a>
``` javascript

{
    ...

    // 配置打包输出
    output : {

        // 配置打包后文件的存放目录
        path : './assets/',

        // 配置打包后文件的文件名
        // 可包含[name]、[hash]、[chunkhash]变量参数
        filename : '[name]-[hash].js',

        // 配置静态资源（图片、脚本、样式）的引用网址（CDN部署）
        publicPath : 'http://www.edonet.com/assets/',

        // 打包后文件所引用模块的名称
        // 可包含[id]、[name]、[hash]、[chunkhash]变量参数
        chunkFilename: '[name]-[hash].js',

        // 打包后文件源码地图的名称
        // 可包含[name]、[hash]、[id]变量参数
        sourceMapFilename: '[name]-[hash].js.map',

        // 作为库发布时的库名，配合【libraryTarget】一起使用
        library: 'utils',

        // 发布库的方法
        // 可选：[var], [this], [commonjs], [commonjs2], [amd], [umd]
        libraryTarget: 'umd'
    }
}
```

### <a name="module">3. 【module】配置项</a>
``` javascript

{
    ...

    // 配置模块解析设置
    module: {

        // 配置无需解析的模块，支持正则
        // 可避免解析不必要的模块、提高性能
        noParse: /\.min\.js$/,

        // 配置各类模块的加载器
        loaders: [

            /*  ----------------------------------------------------------------
             * 【loader】可选配置项
             *  ----------------------------------------------------------------
             *  test: 【RegExp】，匹配要加载的资源
             *  exclude: 【RegExp】，排除加载的资源
             *  include: 【array of file/folder】，包含在指定数组内的（文件或文件夹内）资源才起用此加载器
             *  loader: 【string of loader】，加载器字符串
             *  loaders: 【array of loader】，多个加载器的数组
             */

            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            },
            {
                test: /.(png|jpg|gif|woff|woff2)$/,
                loader: 'url?limit=8192&name=img/[name]-[hash].[ext]'
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                loader: 'file?name=img/[name]-[hash].[ext]'
            }
        ]
    }
}

```

### <a name="resolve">4. 【resolve】配置项</a>
``` javascript

{
    ...

    // 模块解析配置
    resolve: {

        // 配置别名，可减少模块检索时间
        alias: {
            js: './js',
            css: './css',
            img: './img',
            utils: './js/lib/utils.min.js'
        },

        // 配置模块检索的根目录，必需为绝对路径
        root: [
            path.resolve('./app/modules'),
            path.resolve('./vendor/modules'),
        ],

        // 配置模块资源库目录
        modulesDirectories: ["web_modules", "node_modules"],

        // 配置需要解析模块的默认扩展名
        extensions：["", ".webpack.js", ".web.js", ".js"],

        // 当找不到模块时，到指定目录内找
        fallback: path.join(__dirname, "node_modules")
    }
}
```

### <a name="resolveLoader">5. 【resolveLoader】配置项</a>
``` javascript

{
    ...

    // 模块加载器解析配置
    resolveLoader: {

        // 当找不到模块加载器时，到指定目录内找
        fallback: path.join(__dirname, "node_modules")
    }
}
```

### <a name="externals">6. 【externals】配置项</a>
``` javascript

{
    ...

    // 外部资源引用配置，【key】为引用的模块名，【value】为在【global】中的对象
    // 配置后的模块会被替换成全局对象，不会去解析，可提高性能
    externals: {
        react: 'React',
        jquery: 'jQuery',
        angular: 'angular'
    }
}

```

### <a name="devtool">7. 【devtool】配置项</a>
``` javascript

{
    // 配置开发调试工具
    devtool: 'source-map'
}
```

### <a name="plugins">8. 【plugins】配置项</a>
``` javascript

{
    // 配置打包插件
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
}
```

## 四、【webpack】性能优化
解决【webpack】打包的性能问题，可以从以下几步去做：

1. 使用【--display-modules】和【--profile】两个参数展示打包细节，分析瓶颈。
2. 使用【resolve.alias】（即别名）做重定向，减少模块路径解析。
3. 作用【module.noParse】忽略某些模块的解析。
4. 作用【externals】定义外部依赖方法来使用公用CDN。

## 五、【webpack】常用插件

* 【HotModuleReplacementPlugin】：代码热替换
* 【HtmlWebpackPlugin】：生成html文件
* 【ExtractTextPlugin】：将css成生单独的文件，而非内联
* 【NoErrorsPlugin】：报错但不退出webpack进程
* 【UglifyJsPlugin】：代码压缩丑化
* 【CommonsChunkPlugin】：提取共用的模块
* 【ProvidePlugin】：通过模块的别名加载外部对象
