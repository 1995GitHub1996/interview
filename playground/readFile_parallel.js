
const fs = require('fs');
const files = [
    './files/100m.txt','./files/20m.txt', './files/10m.txt', './files/10m_2.txt', './files/2m.txt', './files/1m.txt'
];

let t = 0;
for (let i = 0; i < files.length; i++) {
    fs.readFile(files[i], 'utf8', function (err,res) {
        if (err) throw err;
        t++;
        console.log(`file : ${files[i]}`);
        if (t === files.length){
            console.log('done');
        }
    });
}

