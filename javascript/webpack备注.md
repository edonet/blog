# 【webpack】备注

## plugin
修改合并后的文件内容
``` javascript

function ReplaceContentsWebpackPlugin(options) {
    this.find = options.find;
    this.replace = options.replace;
}

ReplaceContentsWebpackPlugin.prototype.apply = function(compiler, callback) {
    var find = this.find,
        replace = this.replace;

    compiler.plugin("compilation", function(compilation) {
        compilation.plugin("optimize-chunk-assets", function(chunks, callback) {
            chunks.forEach(function(chunk) {
                chunk.files.forEach(function(file) {
                    var asset = compilation.assets[file],
                        code = asset.source();

                    asset._cachedSource = code.replace(find, replace);
                });
            });
            callback();
        });
    });
};
```
