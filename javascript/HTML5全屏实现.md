# HTML5全屏实现
现在主流浏览器基本上实现了全屏效果，但是不同浏览器实现不一样：

## 进入和退出全屏
``` javascript
// Webkit (works in Safari5.1 and Chrome 15)
element.webkitRequestFullScreen();
document.webkitCancelFullScreen();

// Firefox 10+
element.mozRequestFullScreen();
document.mozCancelFullScreen();

// W3C 提议
element.requestFullscreen();
document.exitFullscreen();
```

## 跨浏览器实现
``` javascript
// Find the right method, call on correct element
function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// Launch fullscreen for browsers that support it!
launchIntoFullscreen(document.documentElement); // the whole page
launchIntoFullscreen(document.getElementById("videoElement")); // any individual element

// Whack fullscreen
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

// Cancel fullscreen for browsers that support it!
exitFullscreen();
```

### 注意事项
> Note that exitFullscreen is called on the document object only -- not needing to pass the individual element itself.

## 属性和事件
> Unfortunately the events and properties are still prefixed, but will be unprefixed over time.

``` javascript
document.fullScreenElement: the element which has been pushed to fullscreen.
document.fullScreenEnabled:  notes if fullscreen is current enabled.
// The fullscreenchange event lets us know when we go to/from fullscreen mode:

var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
```

## 相关样式设置
> Fullscreen CSS
> Browsers do provide us one helpful bit of fullscreen CSS control:


``` CSS
:-webkit-full-screen {
  -- properties --
}

:-moz-full-screen {
  -- properties --
}

:-ms-fullscreen {
  -- properties --
}

:full-screen { --pre-spec --
  -- properties --
}

:fullscreen { -- spec --
  -- properties --
}

/* deeper elements */
:-webkit-full-screen video {
  width: 100%;
  height: 100%;
}

/* styling the backdrop */
::backdrop {
  -- properties --
}
::-ms-backdrop {
  -- properties --
}
```
> In some cases, WebKit needs a bit of help, so the code above should be kept handy if you're dealing with media.


