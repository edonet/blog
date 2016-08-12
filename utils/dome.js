'use strict';

const
    stream = require('./stream');

let s = stream('./copy.js')
    .pipe(function (code) {
        return 'abc: \n' + code;
    })
    .pipe('./t')
    .pipe(function (code) {
        return 'ok?\n' + code;
    })
    .pipe('./t2');

console.log(s);
