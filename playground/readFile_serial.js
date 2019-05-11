
const fs = require('fs');
const files = [
    './files/100m.txt','./files/20m.txt', './files/10m.txt', './files/10m_2.txt', './files/2m.txt', './files/1m.txt'
];

function fs_test(t) {
        fs.readFile(files[t], 'utf8', function (err,res) {
            if (err) throw err;
            console.log(`file : ${files[t]}`);
            
            if (t < files.length-1){
                fs_test(t+1);
            }else{
                console.log('done');
            }

        });
}
fs_test(0);