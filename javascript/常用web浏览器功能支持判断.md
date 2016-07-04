# 常用web浏览器功能支持判断
常用的【web 浏览器】功能支持判断

## 判断IE8以下浏览器
``` javascript
function isLowerIE8(){
    return !-[1,];
}
```

## SVG支持检测
``` javascript
function isSupportSVG(){
    return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
}
```

## Canvas支持检测
``` javascript
function isSupportCanvas(){
    return !! document.createElement('canvas').getContext;
}
```

## 检测是否为微信浏览器
``` javascript
function isWeixin(){
    return !!~ navigator.userAgent.toLowerCase().indexOf('micromessenger');
}
```
