# DataURL与File，Blob，canvas对象之间的互相转换
在前端图片处理过程中，常用DataURL/Blob/File/Canvas之间互相转换的api备忘


## Blob 路径操作

``` js

    var blob, url;

    // 生成 blob 文件
    blob = new Blob(['hello world!']);

    // 生成 blobUrl
    url = window.URL.createObjectURL(blob);

    // 释放 blobUrl
    window.URL.revokeObjectURL(objectURL);

```


## 获取File列表
``` js

    // 从【input】控件中获取文件
    function getFileListFromInput(selector, callback) {
        var dom = document.querySelector(selector);

        dom.addEventListener('change', function () {
            dom.files.length && callback(dom.files);
        });

        dom.files.length && callback(dom.files);
    }


    // 通过【drop】获取文件
    function getFileListFromDrop(selector, callback) {
        document
            .querySelector(selector)
            .addEventListener('dragenter', initDropEvent)
            .addEventListener('dragover', initDropEvent)
            .addEventListener('drop', function (e) {
                var files = e.dataTransfer.files;

                files.length && callback(files);
                e.preventDefault();
            });
    }

    function initDropEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // 从【blob】中生成文件
    function createFileFromBlob(content, name, type) {
        return new File([content], name, { type: type || 'text/plain' });
    }

    // 从【dataUrl】中生成文件
    function createFileFromDataUrl(name, dataUrl) {
            var arr = dataUrl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);

            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }

            return new File([u8arr], name, { type: mime });
    }

```

## FileReader 对象

``` js

    var reader = new FileReader();

    /*
     * FileReader 属性
     * -----------------------------------------------------------
     * reader.result // 读取的结果(二进制、文本或DataURL格式)
     * reader.readyState // 读取操作的状态(EMPTY、LOADING、DONE)

     * // FileReader 方法
     * -----------------------------------------------------------
     * reader.readAsBinaryString(blob/file) // 以二进制格式读取文件内容
     * reader.readAsText(file, [encoding]) // 以文本(及字符串)格式读取文件内容，并且可以强制选择文件编码
     * reader.readAsDataURL(file) // 以DataURL格式读取文件内容
     * reader.abort() // 终止读取操作

     * // FileReader 事件
     * -----------------------------------------------------------
     * reader.onloadstart // 读取操作开始时触发
     * reader.onload // 读取操作成功时触发
     * reader.onloadend // 读取操作完成时触发(不论成功还是失败)
     * reader.onprogress // 读取操作过程中触发
     * reader.onabort // 读取操作被中断时触发
     * reader.onerror // 读取操作失败时触发
     */

    reader.onload = function () {
        console.log(reader.result);
    };

    reader.readAsDataURL(file);

```

## 获取 dataUrl

``` js

    // 从 Canvas 中获取
    function createDataUrlFromCanvas(canvas, options) {
        return canvas.toDataURL(options.type || 'image/png', options.quality || '1.0');
    }

    // 从 Blob/File 中获取
    function readBlobAsDataURL(blob, callback) {
        var reader = new FileReader();

        reader.onload = function(e) {
            callback(reader.result);
        };

        reader.readAsDataURL(blob);
    }

```

## Canvas 操作

``` js

    // 将图片绘制到 Canvas
    function drawImage(canvas) {
        var ctx = canvas.getContext('2d'),
            args = [].slice.apply(arguments, 1);

        return args.length && ctx.drawImage.apply(ctx, args);
    }

    // 将 dataUrl 绘制到 Canvas
    function drawDataUrl(canvas, dataUrl) {
        var argus = [].slice.apply(arguments, 2),
            image = new Image();

        image.onload = function () {
            canvas.getContext('2d').drawImage();
        }

        image.src = dataUrl;
    }

    // 将 Bolb 数据绘制到 Canvas
    function drawBolb(canvas, bolb) {
        return readBlobAsDataURL(bolb, function (url) {
            drawDataUrl(canvas, url);
        });
    }

```

## FormData 操作

``` js

    var dataUrl = canvas.toDataURL('image/png'),
        blob = createFileFromDataUrl(dataUrl),
        data = new FormData(),
        xhr = new XMLHttpRequest();

    data.append('image', blob, 'image.png');
    xhr.open('POST', '/server', true);
    xhr.send(data);

```

