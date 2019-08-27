// 箭头函数this的定义：箭头函数中的this是在定义函数的时候绑定，而不是在执行函数的时候绑定。
// 普通函数this的定义：与运行环境相关！

// let test = function() {
//     console.log(this);              // this：全局对象
// };
// test();

// let Test = function() {
//     console.log(this);              // this：Test实例
// };
// new Test();

// function Test() {
//     console.log(this);
// }

// Test();                                // this: 全局对象
// new Test();                            // this: Test实例

// function Test() {                      // 可验证普通函数与箭头函数this区别
//     this.a = 'a';

//     this.f = () => {
//         // this.a = 'b';
//         console.log(this.a);
//         return function(){
//             console.log(this.a);
//         };
//     };
// }

// let v =  new Test();
// let b = v.f;
// b()();

//（1）一般函数this指向在执行是绑定  当运行obj.say()时候，this指向的是obj这个对象。

// this.a = 'ff';
// var obj = {
//     x: 22,
//     y: this,                            // 此处this为全局this
//     say: () => {
//         console.log(this.b);
//     }
// };

// obj.say();

//console.log输出的是22


// （2）所谓的定义时候绑定，就是this是继承自父执行上下文！！中的this，比如这里的箭头函数中的this.x，箭头函数本身与say平级以key:value的形式，
// 也就是箭头函数本身所在的对象为obj，而obj的父执行上下文就是window，因此这里的this.x实际上表示的是window.x，因此输出的是11。

// var x=11;
// var obj={
//     x:22,
//     say:()=>{
//         console.log(this.x);
//     }
// };
// obj.say();

//console.log输出的是11

// function Timer(){
//     this.s1 = 0;
//     this.s2 = 0;
//     //箭头函数
//     setInterval(() => {
//         console.log('s1:', this.s1);
//         this.s1++;
//     }, 1000);
//     //普通函数
//     setInterval(function (){
//         console.log('s2:', this.s2);
//         this.s2++;
//     }, 1000);
// }
// var timer = new Timer();
// setTimeout(() => console.log('s1: ', Timer().s1), 3100);  //s1:  3
// setTimeout(() => console.log('s2: ',Timer().s2), 3100);   //s2:  0
// this.b = 'b';
// let a = {
//     b: 'c',
//     c: function () {
//         return this.b;
//     }
// };

// let v = a.c;
// console.log(this);

// let arr = [1,2,3].map(function(e) {
//     return this;
// });


// function concatenateAll(...args) {
//     console.log(args);
// }
// concatenateAll(1,2,3);