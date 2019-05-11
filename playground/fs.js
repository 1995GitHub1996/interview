
const fs = require('fs');

function cb(err, result) {
    if (err) throw err;
    console.log(`file length: ${result.length}`);
}
    fs.readFile('./readFile.js', 'utf8', cb);
    console.log('done');
