'use strict';

const fs = require('fs');


// 同步获取目录信息
function statSync(dir) {
    try {
        return fs.statSync(dir);
    } catch(e) {
        return undefined;
    }
}


// 抛出接口
module.exports = function (dir, callback) {
    return typeof callback === 'function' ?
        fs.stat(dir, callback) : statSync(dir);
};
