'use strict';

const
    fs = require('fs'),
    path = require('path'),
    stat = require('./stat'),
    mkdir = require('./mkdir'),
    readdir = require('./readdir'),
    all = require('./all');


// 异步复制文档
function copyAsync (src, dist, callback) {
    stat(src, (err, stats) => {
        if (err) {
            return callback(err);
        }

        if (stats.isDirectory()) {
            return readdir(src, (err, files) => {
                if (err) {
                    return callback(err);
                }

                mkdir(dist, (err) => {
                    if (err) {
                        return callback(err);
                    }

                    all(files)
                        .resolve((file, next) => {
                            let srcTemp = path.join(src, file),
                                distTemp = path.join(dist, file);

                            copyAsync(srcTemp, distTemp, next);
                        })
                        .then(callback, callback);
                });
            });
        }

        try {
            let rs = fs.createReadStream(src),
                ws = fs.createWriteStream(dist);

            rs.on('error', callback);
            ws.on('error', callback);
            ws.on('finish', function () {
                callback(null);
            });

            rs.pipe(ws);
        } catch(e) {
            callback(e);
        }
    });
}


// 同步复制文档
function copySync (src, dist) {
    let stats = stat(src);

    if (!stats) {
        return false;
    }

    if (stats.isDirectory()) {
        let files = readdir(src);

        files && mkdir(dist) && files.forEach(file => {
            copySync(path.join(src, file), path.join(dist, file));
        });

        if (files && mkdir(dist)) {
            for (let file of files) {
                let srcTemp = path.join(src, file),
                    distTemp = path.join(dist, file);

                if (!copySync(srcTemp, distTemp)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    } else {
        try {
            let code = fs.readFileSync(src);

            fs.writeFileSync(dist, code);
            return true;
        } catch(e) {
            console.log(e);
        }
    }

    return false;
}


// 空函数
function noop () {}


module.exports = function (src, dist, callback) {

    if (callback === false) {
        return copySync(src, dist);
    }

    return typeof callback === 'function' ?
        copyAsync(src, dist, callback) : copyAsync(src, dist, noop);
};
