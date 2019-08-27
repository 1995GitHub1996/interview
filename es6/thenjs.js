const Thenjs = require('thenjs');

const arr = [1,2,3,4,556,67,7,8,989];

Thenjs.eachLimit(arr, (cont, arg) => {
    if (arg === 556) {	
        return cont('adfadfs');
    }

    return cont(null, arg);
}, 3).fin((cont, err, arg) => {
    console.log(err);
    console.log(arg);
});

function abc(d, cb) {
    console.log('d', d);
    if (d === 3) {	
        return cb('adfadfs');
    }

    return cb(null, null);
}