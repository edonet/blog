'use strict';

const
    fs = require('fs'),
    stat = require('./stat');


// 异步复制文档
function copyAsync (src, dist, callback) {
    stat(src, function (err) {
        if (err) {
            return callback(err);
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

    try {
        let code = fs.readFileSync(src);

        fs.writeFileSync(dist, code);
        return true;
    } catch(e) {
        console.log(e);
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
