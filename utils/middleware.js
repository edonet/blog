'use strict';

function noop() {}

module.exports = (...arr) => (...args) => {
    if (arr.length) {
        arr.reduceRight((next, fn) => (err, res) => {
            if (err) {
                return console.log(err);
            }

            typeof fn === 'function' ?
                fn.call({ data: res }, ...args, next) :
                next(null, fn);

        }, noop)();
    }
};
