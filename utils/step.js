'use strict';

// 空函数
function noop() {}

module.exports = (...arr) => handler => {
    if (arr.length) {
        let len = handler.length,
            first, fn;

        switch (len) {
            case 0:
            case 1:
                fn = (res, curr, next) => {
                    return (res = handler(curr)) === false ?
                        next(new Error('发生未知错误')) : next(null, res);
                };
                break;
            case 2:
                fn = (res, curr, next) => handler(curr, next);
                break;
            default:
                fn = (res, curr, next) => handler(res, curr, next);
                if (typeof arr[0] !== 'function') {
                    first = arr[0];
                    arr[0] = () => first;
                }
                break;
        }

        arr.reduceRight((next, curr) => (err, res) => {
            if (err) {
                return console.log(err);
            }

            if (typeof curr === 'function') {
                if (curr.length > 1) {
                    return curr(res, next);
                }

                return (res = curr(res)) === false ?
                    next(new Error('发生未知错误')) : next(null, res);
            }

            fn(res, curr, next);
        }, noop)();
    }
};
