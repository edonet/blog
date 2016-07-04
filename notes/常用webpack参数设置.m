# 常用webpack参数设置
备忘一下常用的webpack参数设置，[参考链接](http://webpack.github.io/docs/configuration.html#multiple-configurations)

## 主要配置项

* entry：js入口源文件
* output：生成文件
* module：进行字符串的处理
* resolve：文件路径的指向
* plugins：插件，比loader更强大，能使用更多webpack的api

## 配置详情

``` javascript
{
    /*
     **************************
     * 配置入口文件
     **************************
     *  ---------------------------------------------------------------------------------
     * 【String】: 即将打包的单个文件路径，输出单个文件。如下：
     *  ---------------------------------------------------------------------------------
     *  entry: '/src/js/page/index.js'
     *  ---------------------------------------------------------------------------------
     * 【Array】: 即将打包合并的多个文件路径，输出合并后的文件。如下：
     *  ---------------------------------------------------------------------------------
     *  entry: [
     *      '/src/js/page/index.js',
     *      '/src/js/page/header.js',
     *      '/src/js/page/footer.js'
     *  ]
     *  ---------------------------------------------------------------------------------
     * 【Object】: 即将打包的多个文件路径，键为输入后的文件名，值为入口文件路径。如下：
     *  ---------------------------------------------------------------------------------
     *  entry: {
     *      index: '/src/js/page/index.js',
     *      about: '/src/js/page/about.js',
     *      show: '/src/js/page/show.js'
     *  }
     */
    entry: {
        common: ['jquery', 'bootstrap'],
        index: ['main.js']
    },
    /*
     **************************
     * 配置输出文件
     **************************
     *  ---------------------------------------------------------------------------------
     * 【output.filename】：输出文件名称，可包含[name]、[hash]、[chunkhash]变量参数
     *  ---------------------------------------------------------------------------------
     *  filename: '/build/js/[name]-[hash].js'
     *  ---------------------------------------------------------------------------------
     * 【output.path】: 输入文件的绝对目录，可包含[hash]变量参数
     *  ---------------------------------------------------------------------------------
     *  path: 'd:/www/build/'
     *  ---------------------------------------------------------------------------------
     * 【output.publicPath】：用于实例静态资源路径，可包含[hash]变量参数。
     *  ---------------------------------------------------------------------------------
     *  publicPath: 'htt://www.cdn.com/'
     *  ---------------------------------------------------------------------------------
     * 【output.chunkFilename】：引用模块的名称，可包含[id]、[name]、[hash]、[chunkhash]变量参数
     *  ---------------------------------------------------------------------------------
     * 【output.sourceMapFilename】：输出文件地图名称，可包含[name]、[hash]、[id]变量参数
     *  ---------------------------------------------------------------------------------
     */
    output: {
        publicPath: config.defaultPath,
        path: config.path.dist,
        filename: 'js/[name][hash].js'
    }
    /*
     **************************
     * 配置模块设置
     **************************
     *  ---------------------------------------------------------------------------------
     * 【loaders】：定义模块加载器
     *  ---------------------------------------------------------------------------------
     *  test: 【RegExp】，匹配要加载的资源
     *  exclude: 【RegExp】，排除加载的资源
     *  include: 【array of file/folder】，包含在指定数组内的（文件或文件夹内）资源才起用本加载器
     *  loader: 【string of loader】，加载器字符串
     *  loaders: 【array of loader】，多个加载器的数组
     *  ---------------------------------------------------------------------------------
     * 【noParse】：【RegExp】【array of RegExps】定义不需要解析的资源
     *  ---------------------------------------------------------------------------------
     */
    module: {
        noParse: ['/react/dist/react.min'],
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                include: path.resolve(config.path.src)
            }
        ]
    },
    /*
     **************************
     * 配置模块解析设置
     **************************
     *  ---------------------------------------------------------------------------------
     * 【alias】：定义资源简称
     *  ---------------------------------------------------------------------------------
     *  alias: {
     *      abc: "/absolute/path/to/abc.js"
     *      xyz$: "/absolute/path/to/xyz.js"
     *  }
     *  ---------------------------------------------------------------------------------
     * 【resolve.root】：定义资源引入根目录，可为数组，必需为绝对路径
     *  ---------------------------------------------------------------------------------
     *  root: [
     *      path.resolve('./app/modules'),
     *      path.resolve('./vendor/modules')
     *  ]
     *  ---------------------------------------------------------------------------------
     * 【resolve.modulesDirectories】：定义资源模块库目录
     *  ---------------------------------------------------------------------------------
     *  modulesDirectories: ["web_modules", "node_modules"]
     *  ---------------------------------------------------------------------------------
     * 【resolve.extensions】：需要解析的扩展名
     *  ---------------------------------------------------------------------------------
     *  extensions：["", ".webpack.js", ".web.js", ".js"]
     *  ---------------------------------------------------------------------------------
     * 【resolve.fallback】: 当找不到模块时，到指定目录内找
     *  ---------------------------------------------------------------------------------
     *  fallback: path.join(__dirname, "node_modules")
     */
    resolve: {
        alias: {
            'react-dom': '/react-dom/dist/react-dom',
            'redux': '/redux/dist/redux'
        },
        extensions: ['', '.js', '.jsx', '.es6', 'css'],
        fallback: path.join(__dirname, "node_modules")
    }
    /*
     **************************
     * 配置模块加载器解析设置
     **************************
     *  ---------------------------------------------------------------------------------
     * 【resolveLoader.fallback】: 当找不到模块时，到指定目录内找
     *  ---------------------------------------------------------------------------------
     *  fallback: path.join(__dirname, "node_modules")
     */
    resolveLoader: {
        fallback: path.join(__dirname, "node_modules")
    },
    /*
     **************************
     * 插件配置
     **************************
     *  ---------------------------------------------------------------------------------
     * 【plugins】: 插件数组
     *  ---------------------------------------------------------------------------------
     *  plugins: [...plugin]
     */
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            excludeChunks: ['test'],
            template: 'src/index.html',
            favicon: 'src/img/favicon.ico'
        }),
        new ExtractTextPlugin('./css/[name][hash].css'),
        new webpack.NoErrorsPlugin()
    ]
}
```

## 常用Loaders介绍

* 处理样式，转成css，如：less-loader, sass-loader
* 图片处理，如: url-loader, file-loader。两个都必须用上。否则超过大小限制的图片无法生成到目标文件夹中
* 处理js，将es6或更高级的代码转成es5的代码。如： babel-loader，babel-preset-es2015，babel-preset-react
* 将js模块暴露到全局，如果expose-loader

## 常用Plugins介绍

* 代码热替换, HotModuleReplacementPlugin
* 生成html文件，HtmlWebpackPlugin
* 将css成生文件，而非内联，ExtractTextPlugin
* 报错但不退出webpack进程，NoErrorsPlugin
* 代码丑化，UglifyJsPlugin，开发过程中不建议打开
* 多个 html共用一个js文件(chunk)，可用CommonsChunkPlugin
* 清理文件夹，Clean
* 调用模块的别名ProvidePlugin，例如想在js中用$，如果通过webpack加载，需要将$与jQuery对应起来
