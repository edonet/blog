# DOM Events 事件对象
自定义DOM Events事件对象方法备注

## domcument.createEvent(eventType)
eventType类型如下:

* HTMLEvents：包括 'abort'、'blur'、'change'、'error'、'focus'、'load'、'reset'、'resize'、'scroll'、'select'、'submit'、'unload'事件。
* UIEevents：包括'DOMActivate'、'DOMFocusIn'、'DOMFocusOut'、'keydown'、'keypress'、'keyup', 间接包含 MouseEvents。
* MouseEvents：包括 'click'，'mousedown'，'mousemove'，'mouseout'，'mouseover'，'mouseup'。
* MutationEvents:包括 'DOMAttrModified'，'DOMNodeInserted'，'DOMNodeRemoved'，'DOMCharacterDataModified'，'DOMNodeInsertedIntoDocument'，'DOMNodeRemovedFromDocument'，'DOMSubtreeModified'。

## event.initEvent('type', bubbles, cancelable)
初始化event对象

* HTMLEvents 和 通用 Events：initEvent( 'type', bubbles, cancelable )
* UIEvents：initUIEvent( 'type', bubbles, cancelable, windowObject, detail )
* MouseEvents：initMouseEvent( 'type', bubbles, cancelable, windowObject, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget )
* MutationEvents：initMutationEvent( 'type', bubbles, cancelable, relatedNode, prevValue, newValue, attrName, attrChange )

## target.dispatchEvent(event)
* 触发自定义事件作用：target.dispatchEvent(event)
* 需要注意的是在IE版本上请用: target.fireEvent(eventType, event, canceled)

## 自定义触发事件方法
``` javascript

// 自定义事件触发方法
var emitEvent = document.createEvent ? function (el, type) {
    var e = document.createEvent('MouseEvents');

    e.initEvent(type, true, false);
    el.dispatchEvent(e);
} : function (el, type) {
    var e = document.createEventObject();

    e.eventType = type;
    el.fireEvent('on' + type, e);
};

```
