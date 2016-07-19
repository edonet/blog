# 【jshint】的安装和配置说明

## 如何在【Sublime Text】中安装【jshint】插件
---
【sublime Text】下，【jshint】插件依赖于【node】环境。其主要安装流程如下：

> 1. 【node】下安装【jshint】
> 2. 安装【Sublime Text】-【SublimeLinter】插件
> 3. 安装【Sublime Text】-【SublimeLinter-jshint】插件
> 4. 配置【.jshintrc】文件

[点击查看详细安装流程](./jshint安装和配置/install-for-sublime-text.md)

## 配置文件
---
以下为【jshint】的通用配置，各项目组可以根据具体情况稍作修改。[点击查看完整的【.jshintrc】文件](./jshint安装和配置/.jshintrc)


``` json
{
    /**
     * 增强参数(Enforcing Options)
     * 本类参数设为true，JSHint会产生更多告警。
     */

    // 禁用位运算符，位运算符在 JavaScript 中使用较少，经常是把 && 错输成 &
    "bitwise": false,

    // 使用驼峰命名(camelCase)或全大写下划线命名(UPPER_CASE)
    "camelcase": false,

    // 循环或者条件语句必须使用花括号包围
    "curly": true,

    // 强制使用三等号
    "eqeqeq": true,

    // 兼容低级浏览器 IE 6/7/8/9
    "esversion": 6,

    // 要求所有 for in循环过滤对象的原型属性
    "forin": true,

    // 禁止重写原生对象的原型，比如 Array ， Date
    "freeze": true,

    // 禁止从外部访问内部声明的变量
    "funcscope": true,

    // 允许警告js未来版本中定义的标识符。
    "futurehostile": true,

    // 定义一些全局变量
    "globals": {
        "seajs": true,
        "define": true,
        "require": true
    },

    // 代码缩进
    "indent": true,

    // 禁止定义之前使用变量，忽略 function 函数声明
    "latedef": "nofunc",

    // 构造器函数首字母大写
    "newcap": true,

    // 禁止使用 arguments.caller 和 arguments.callee ，未来会被弃用，
    // ECMAScript 5 禁止使用 arguments.callee
    "noarg": true,

    // 禁止使用构造器。构造一个对象，却不给它赋值到某个变量，只是利用构造函数中的逻辑。
    // 这个行为完全可以用一个普通函数来完成，不应该借助构造器。
    "nonew": true,

    // 检查无效 typeof操作符的值
    "notypeof": true,

    // 禁止使用++和--
    "plusplus": false,

    // 只使用单引号。为 true 时，禁止单引号和双引号混用
    "quotmark": "single",

    // 变量未定义
    "undef": true,

    // 变量未使用
    "unused": true,

    // 严格模式
    "strict": true,

    // 最多参数个数
    "maxparams": 4,

    // 最大嵌套深度
    "maxdepth": 4,

    // 复杂度检测
    "maxcomplexity": false,

    // 最大行数
    "maxlen": 600,


    /**
     * 松弛参数(Relaxing Options)
     * 本类参数设为true，JSHint会产生更少告警。
     */

    // 允许省略分号
    "asi": false,

    // 允许在if，for，while语句中使用赋值，如if (a = 10) {}
    "boss": true,

    // 忽略 debugger
    "debug": true,

    // 允许 == null，== null通常用来比较=== null || === undefined
    "eqnull": false,

    // 允许使用eval()
    "evil": false,

    // 允许使用表达式
    "expr": true,

    // 允许在控制体内定义变量而在外部使用，如：function a(){ if (true) { var x = 0; } x += 1; }
    "funcscope": false,

    // 允许iterator，不是所有的浏览器都支持iterator。
    "iterator": true,

    // 允许单行控制块省略分号，如：var name = (function() { return 'Anton' }());
    "lastsemic": false,

    // 允许不安全的折行(与laxcomma配合使用)
    "laxbreak": false,

    // 允许逗号开头的编码样式
    "laxcomma": false,

    // 允许循环内嵌套 function
    "loopfunc": false,

    // JSHint中断扫描前允许的最大错误数。因为最终我们需要清零JSHint报错，所以这个值用在对已有项目的扫描中。
    "maxerr": false,

    // 允许多行字符串
    "multistr": true,

    // 允许变量重复定义
    "shadow": "inner",

    // 充许使用person['name']的方式获取属性（person['name'] vs. person.name）
    "sub": true,

    // 允许 new function () { ... } 和 new Object ;
    "supernew": true,

    // 允许在非构造器函数中使用 this
    "validthis": true,


    /*
     * 环境参数(Enviroments)
     * 预定义一些全局变量，如node, jquery等
     */

    // 预定义全局变量 document ， navigator ， FileReader 等
    "browser": true,

    // 定义用于调试的全局变量： console ， alert
    "devel": true,

    // 定义全局变量
    "node": true,
    "jquery": true
}
```
