'use strict';
 
var Thenjs = require('thenjs');


function task(params,callback) {
    var res =  params;
    return callback(null,res)
}

function times(params, cont) {
    setTimeout(() => {
        var s = params;
        console.log(s);
        return cont(null,s);
    }, params);
}

//并行执行
// Thenjs.each([2, 1, 3], function (cont, value) {
//     times(value*1000,cont);
// }).then(function (cont, result) {
//     console.log(result);
// });

//输出  1000  2000  3000  耗时3s

//串行执行
// Thenjs.eachSeries([0, 1, 2], function (cont, value) {
//     task(value * 4, cont);
// }).then(function (cont, result) {
//     console.log(result);
// });

//输出  2000  1000  3000  耗时6s


function task1(params, cont) {
    setTimeout(() => {
        console.log(params);
        cont(33,params);
    }, 1000);
}
function task2(params, cont) {
    setTimeout(() => {
        console.log(20);
        return cont(null, 20);
    }, 2000);
}

Thenjs.series([
    function (cont, res) { task1(2, cont) },
    function (cont,res) { 
            console.log(res);
     },
]).then(function (cont, result) {
        console.log(result);
});
