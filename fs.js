var fs = require("fs");

// fs.readFile('node.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

var data = {
    "name":"duwenqiang",
    "age":23
}
fs.writeFile('./wfile.json', JSON.stringify(data), { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
    if (err) {
        console.log("文件写入失败")
    } else {
        console.log("文件写入成功");
    }
    
})
console.log("程序执行结束!");
