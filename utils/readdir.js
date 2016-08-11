'use strict';

const fs = require('fs');

// 异步读取目录
function readdir (dir, filter, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            return callback(err);
        }

        if (filter instanceof RegExp) {
            return callback(null, files.filter(function(v) {
                return filter.test(v);
            }));
        }

        return callback(null, files);
    });
}

// 同步读取目录
function readdirSync (dir, filter) {
    try {
        let files = fs.readdirSync(dir);

        if (filter instanceof RegExp) {
            return files.filter(function(v) {
                return filter.test(v);
            });
        }

        return files;
    } catch(e) {
        return undefined;
    }
}


// 抛出接口
module.exports = function (dir, filter, callback) {
    if (typeof filter === 'function') {
        let func = filter;

        filter = callback;
        callback = func;
    }

    return typeof callback === 'function' ?
        readdir(dir, filter, callback) : readdirSync(dir, filter);
};
