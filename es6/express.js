var express = require('express');
var app = express();

var beforeRoute = express.Router()
var beforeRoute1 = express.Router()

beforeRoute.use('/test', function(req, res, next) {
    console.log('test');
    next()
});

beforeRoute1.use('/test1', function(req, res, next) {
    console.log('test1');
    next()
});

app.all('*', function(req, res, next) {
    console.log(1)
    next()
},function(req, res, next) {
    console.log(2)
    next()
},function(req, res, next) {
    console.log(3)
    next()
},function(req, res, next) {
    console.log(4)
    next()
})

app.use('/v1/test', beforeRoute, beforeRoute1, function(req, res) {
    res.send('Welcome');
});

console.log(process.memoryUsage())
app.listen(3000, ()=> {
    console.log('success')
});