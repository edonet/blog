# 常用Webpack性能优化手段
备注一下Webpack性能优化的常用手段

## 显示Webpack打包运行细节
运行如下命令，可以打印出打包细节
``` sh
webpack --entry ./entry.js --output-path dist --output-file bundle.js \
--colors \
--profile \
--display-modules
```
命令包含3个参数，其各自的含义如下：
>   --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤

>   --profile 输出性能数据，可以看到每一步的耗时

>   --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
通过分析所有细节，可知道打包的性能瓶颈所在

## 在Webpack中使用别名
``` javascript
resolve: {
    alias: {
        moment: "moment/min/moment-with-locales.min.js"
    }
}
```
使用别名可以减少模块的路径解析，很多时候可以提高模块的打包速度

## 在 Webpack 中忽略对已知文件的解析
``` javascript
module: {
    noParse: [/moment-with-locales/]
}
```
如果你确定一个模块中没有其它新的依赖 就可以这样配置这项， Webpack将不再扫描这个文件中的依赖。

## 在 Webpack 中使用公用 CDN
``` javascript
externals: {
    moment: 'moment'
}
```
Webpack 可以使用 externals 声明外部依赖，这样可以将一些公用的资源模块提取出来，放到公用的 CDN 中（当然可以直接引用现在的 CDN）。

你需要做的另外一件事是将这些资源在加入打包文件之前在HTML中引入，如下面：
``` javascript
<script src="//apps.bdimg.com/libs/moment/2.8.3/moment-with-locales.min.js"></script>
<script src="/bundle.js"></script>
```

## 总结

以上是常用的解决Webpack性能问题的步骤：

1. 使用--display-modules和--profile两个参数展示打包细节，分析瓶颈。
2. 使用resolve.alias（即别名）做重定向，减少模块路径解析。
3. 作用module.noParse忽略某些模块的解析。
4. 作用externals定义外部依赖方法来使用公用CDN。
