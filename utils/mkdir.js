'use strict';

const
    fs = require('fs'),
    path = require('path'),
    stat = require('./stat');


// 异步生成目录
function mkdir (dir, mode, callback) {
    stat(dir, function (err, stats) {
        if (stats) {
            return callback(null);
        }

        let parent = path.dirname(dir);

        if (parent === dir) {
            return callback(new Error('root dir not exists'));
        }

        mkdir(parent, mode, function (err) {
            if (err) {
                return callback(err);
            }

            fs.mkdir(dir, mode, callback);
        });
    });
}

// 同步生成目录
function mkdirSync (dir, mode) {
    let stats = stat(dir),
        parent;

    if (stats) {
        return true;
    }

    parent = path.dirname(dir);

    if (parent === dir) {
        return false;
    }

    if (mkdirSync(parent, mode)) {
        try {
            fs.mkdirSync(dir);
            return true;
        } catch(e) {
            return false;
        }
    } else {
        return false;
    }
}


// 抛出接口
module.exports = function (dir, mode, callback) {
    if (typeof mode === 'function') {
        callback = mode;
        mode = undefined;
    }

    return typeof callback === 'function' ?
        mkdir(dir, mode, callback) : mkdirSync(dir, mode);
};
