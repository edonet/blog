# markdown 语法备忘
【markdown】学习常用语法备忘

## 标题
``` markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 列表
### 有序列表
``` markdown
* 1
* 2
* 3
```

### 无序列表
``` markdown
1. 1
1. 2
1. 3
```

## 引用
``` markdown
> 例如这样
> > 还可以这样嵌套
```

## 图片与链接
插入链接与插入图片的语法很像，区别在一个 !号
``` markdown
[baidu](http://www.baidu.com)
![baidu logo](http://www.bidu.com/logo.png)
```

## 粗体与斜体
``` markdown
**这是粗体文字**
*这是斜体文字*
```

## 表格
表格是比较累人的东西
``` markdown
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

## 代码
只需要用两个把中间的代码包裹起来，如 ``code``
``` markdown
`
// 这是行代码
console.log('hello world!');
`

``` javascript
// 这是块代码
function add(a, b){
    return a + b;
}
```
```

## 分割线
分割线的语法只需要另起一行，连续输入三个星号 *** 或者三个下划线 ___ 即可
``` markdown
### 标题
***
分割线后的文字
___
再一线分割线后的文字
```
