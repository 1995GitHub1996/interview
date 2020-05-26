// function test(text){
//   console.log(text);
// }

// function test02(callback,text){
//   text= 'test';
//   callback(text);
// }

// test02(test,'text');


// function resolve(text){
//     console.log(text);
// }

// function runAsync(){
//     var p = new Promise(function(resolve, reject){
//         console.log('dd');
//         //做一些异步操作
//         setTimeout(function(){
//             console.log('执行完成');
//             // resolve('随便什么正确数据');
//             reject('随便什么错误数据');
//         }, 2000);
//     });
//     return p;            
// }

// runAsync().then(function(success){
//     console.log(success);
// },function(err){
//     console.log('err');
// }).finally(() => {
//     console.log('任何情况都执行');
// });

// const p1 = new Promise(function (resolve, reject) {
//     console.log('ss');
//     setTimeout(() => reject(new Error('fail')), 2100);
// });
  
// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000);
// });
  
// const p1 = Promise.reject('dsdd');
// p1.finally(() => {});
    

// function test() {
//     for (var i = 0; i < 10; i++) {
//         setTimeout(function () { 
//             console.log(new Date().toLocaleString());
//         }, 2000);	//睡眠2秒，然后再进行一下次for循环打印
//     }
// };
// test();


//此处的延时2s  相当于读文件的过程，不需要等文件读完
//先执行其他操作，什么时候读完，什么时候执行回调
// function test_() {
//         for (var i = 0; i < 5; i++) {
//         setTimeout(function () {
//              console.log(i);
//            }, 2000);	//睡眠2秒，然后再进行一下次for循环打印
//         }
//         console.log(555);
//     };
// test_();

// function callback() {
//     console.log('Done');
// }
// console.log('before setTimeout()');
// setTimeout(callback, 3000); // 1秒钟后调用callback函数
// console.log('after setTimeout()');

// function test(resolve, reject) {
//     var timeOut = Math.random() * 2;
//     console.log('set timeout to: ' + timeOut + ' seconds.');
//     setTimeout(function () {
//         if (timeOut < 1) {
//             console.log('call resolve()...');
//             resolve('200 OK');
//         }
//         else {
//             console.log('call reject()...');
//             reject('timeout in ' + timeOut + ' seconds.');
//         }
//     }, timeOut * 1000);
//     console.log('set timeout 666to: ' + timeOut + ' seconds.');
// }


// var p1 = new Promise(test).then(function (result) {
//      console.log('成功：' + result);
//    }).catch(function (reason) {
//      console.log('失败：' + reason);
//    });


// 0.5秒后返回input*input的计算结果:
// function multiply(input) {
//     return new Promise(function (resolve, reject) {
//         console.log('calculating multiply' + input + ' x ' + input + '...');
//         setTimeout(resolve, 500, input * input);
//     });
// }

// // 0.5秒后返回input+input的计算结果:
// function add(input) {
//     return new Promise(function (resolve, reject) {
//         console.log('calculating add' + input + ' + ' + input + '...');
//         setTimeout(resolve, 500, input + input);
//     });
// }

// var p = new Promise(function (resolve, reject) {
//     console.log('start new Promise...');
//     resolve(2);
//     // reject(4);
// });

// p.then(multiply)
//     .then(add)
//     .then(multiply)
//     .then(add)
//     .then(function (result) {
//         console.log('Got value: ' + result);
//     }).catch(function (params) {
//         console.log(params);
//     });


// var p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         setTimeout(resolve, 500, 'P1');
//     }, 1000);
// }).then(function (params) {
  
//     return (99);
// });


// Promise.all([p1,b]).then(function (params) {
//     console.log(params);
// }).catch(()=>{
//     console.log('fail');
    
// })


// console.log(b());

// var p2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 600, 'P2');
// });
// // 同时执行p1和p2，并在它们都完成后执行then:
// Promise.all([p1, p2]).then(function (results) {
//     console.log(results); // 获得一个Array: ['P1', 'P2']
// }).catch(function (params) {
//     console.log('捕获错误'+params);
// });



// async function testAsync() {
//     return "hello async";
// }

// const result = testAsync();
// console.log(result);



function fn1(){
    return new Promise(function (success, fail) {
        setTimeout(() => {
            success('dwq');
        }, 2000);
    }).then(t => {
        return {
            name : t
        };
    });
}

async function a() {
    console.log('b')

    const b = await fn1()
    console.log(b)
    console.log('v')
}
console.log('sfs')
a()
console.log('sfsfdfs')
// var res = [];


// var two = function fn2() {
//     return new Promise(function (success, fail) {
//         // success('two');
//         console.log(9);
        
//     }).then(u=>{
//         return { name: 'dwq' }
//     });
// }
// var s = Promise.all([two()]).then(y=>{
//     console.log(y);
// });

// console.log(s);


// async  function name(params) {
//     var s = await Promise.all([one(),two()])
//     console.log(s);
// }
// name();

// const promise = new Promise(function (resolve, reject) {
//     reject('test');
//     // resolve('test');
// });
// promise.catch(function (error) {
//     console.log(error);
// });

// const someAsyncThing = function () {
//     return new Promise(function (resolve, reject) {
//         // 下面一行会报错，因为x没有声明
//         resolve(x + 2);
//     });
// };

// someAsyncThing().finally(function () {
//     console.log('everything is great');
// });

// console.log(44);


// setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123


// function dw(){
//     return new Promise((resolve, reject) => {
//        resolve('hello');
//    }).then(()=>{
//        return 88;
//    })
// }



// const p2 = new Promise((resolve, reject) => {
//         throw new Error('报错了');
//     }).then(result => result).catch(e => e);
    
    // Promise.all([p1]).then(result => console.log(result))
// async function name(params) {
    
//        return  'eee';
//         // const dwq = await Promise.all([dw()]);
// //    console.log(dwq);
// }
// console.log(name());

// name().then(r=>{
//     console.log(r);
// })

// async function fn1(params) {
//    const p3 = await new Promise((s,t)=>{
//         setTimeout(s, 1000, 'rr');
//     }).then(r=>{
//         console.log(r);
//         return new Promise((h,e)=>{
//             setTimeout(e, 1000, 'tt');
//         })
//     }).then(c=>{
//         console.log(c);
//         return {name:c}
//     }).catch(k=>{
//         return { name: k}
//     });

//     console.log(44);
//     return p3;
    
// }

// const res = fn1();
// name(res);
// async function name(params) {
//     console.log(await Promise.all([params]));
// }


//test Promise.all 是否能使多个await并行

// function f1(){
//     new Promise((success,fail)=>{
//         setTimeout(success, 1000, 'hello world!');
//     }).then(s => {
//         console.log(s);
         
//         return 'tgggg';
//     });
// }

// function f2(params) {
//     return  new Promise((success, fail) => {
//         setTimeout(success, 2000, 'hi world!');
//     }).then(g=>{
//         return 'ff';
//     });
    
// }


// function name() {
//     Promise.race([f1()]).then(t=>{
//         console.log(t);
//     });
// }

// name();

