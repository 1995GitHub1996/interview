const obj = {a:'a', b:'b'};
for (const key in obj) {
    if(obj[key] === 'b') break;
    console.log(key);
}

const moment = require('moment');

const startTime = moment().subtract(6, 'M').valueOf();
const endTime = moment().add(6, 'M').valueOf();
console.log(endTime - startTime > 366 * 24 * 60 * 60 * 1000);