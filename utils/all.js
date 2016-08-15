'use strict';

class AllTask {
    constructor(...args) {
        this.list = args;
    }
    resolve(handler) {
        return Promise.all(this.list.map((v) => {
            return new Promise((resolve, reject) => {
                handler(v, err => {
                    err ? reject(err) : resolve();
                });
            });
        })).then(() => null);
    }
}

module.exports = (...args) => {
    if (args.length === 1 && args[0] instanceof Array) {
        args = args[0];
    }

    return new AllTask(...args);
};
