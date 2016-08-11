'use strict';

const
    fs = require('fs'),
    path = require('path'),
    stat = require('./stat'),
    readdir = require('./readdir');


// 异步删除目录
function rmdir (dir, callback) {
    stat(dir, function (err, stats) {
        if (err) {
            return callback(null);
        }

        if (stats.isDirectory()) {
            readdir(dir, function (err, files) {
                if (err) {
                    return callback(err);
                }

                Promise
                    .all(files.map(function (file) {
                        return new Promise(function (resolve, reject) {
                            rmdir(path.join(dir, file), function (err) {
                                err ? reject(err) : resolve();
                            });
                        });
                    }))
                    .then(function () {
                        fs.rmdir(dir, callback);
                    }, callback);
            });
        } else {
            fs.unlink(dir, callback);
        }
    });
}


// 同步删除目录
function rmdirSync (dir) {
    let stats = stat(dir);

    if (!stats) {
        return true;
    }

    if (stats.isDirectory()) {
        let files = readdir(dir);

        if (!files) {
            return false;
        }

        for (let file of files) {
            if (rmdirSync(path.join(dir, file)) === false) {
                return false;
            }
        }

        return trydo(function () {
            fs.rmdirSync(dir);
        });
    } else {
        return trydo(function () {
            fs.unlinkSync(dir);
        });
    }
}


// 过滤异常
function trydo(handler) {
    try {
        handler();
        return true;
    } catch(e) {
        return false;
    }
}

// 抛出接口
module.exports = function (dir, callback) {
    return typeof callback === 'function' ?
        rmdir(dir, callback) : rmdirSync(dir);
};
