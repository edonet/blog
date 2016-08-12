'use strict';

const
    fs = require('fs'),
    stream = require('stream'),
    stat = require('./stat');


// 定义转换流【TransferStream】类
class TransferStream extends stream.Transform {
    constructor(handler) {
        super();
        stream.Transform.call(this);

        this.handler = handler;
        this._readableState.objectMode = false;
        this._writableState.objectMode = true;
    }

    // 重写【_transform】方法
    _transform(chunk, encoding, cb) {
        let code = this.handler(chunk.toString());

        code && this.push(code);
        cb();
    }
}


// 定义转换【Transfer】类
class Transfer {
    constructor(src) {
        this.rs = stat(src) ? fs.createReadStream(src) : null;
    }
    pipe(handler) {
        if (!this.rs) {
            return this;
        }

        let st = this,
            type = typeof handler;

        if (type === 'string') {
            st.rs.pipe(fs.createWriteStream(handler));
        } else if (type === 'function') {
            st.rs = st.rs.pipe(new TransferStream(handler));
        } else if (handler instanceof stream.Transform) {
            st.rs = st.rs.pipe(handler);
        } else if (handler instanceof stream.Writable) {
            st.rs.pipe(handler);
        }

        return this;
    }
}


// 抛出接口
module.exports = function (src) {
    return new Transfer(src);
};
