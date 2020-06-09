var fs = require('fs');
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('./es6/prototype.js');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    console.log(chunk);
});

readerStream.on('end',function(){
    console.log('程序执行完毕');
});

readerStream.on('error', function(err){
    console.log(err.stack);
});
