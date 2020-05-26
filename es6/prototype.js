// 'use strict';
// 原型链 : 通过__proto__指向构造函数的prototype的一条链
// eg ： doggie ->（通过__proto__链接）-> Dog.prototype -> （通过__proto__链接）-> Object.prototype ->（通过__proto__链接） -> null

// __proto__ : 对象独有的，由一个对象指向一个对象，通过__proto__属性来连接对象直到null的一条链即为我们所谓的原型链
// constructor: 对象独有的，由一个对象指向一个函数，含义就是指向该对象的构造函数
// prototype : 函数独有的，由一个对函数指向一个对象，是一个函数所创建的实例的原型对象， 通过__proto__属性来连接对象直到null的一条链即为我们所谓的原型链


// 函数创建的对象.__proto__ === 该函数.prototype，该函数.prototype.constructor === 该函数本身
function Point(x, y) {
    this.x = x;
    this.y = y; 
}
let Dog = class {                       // class中默认使用严格模式
    constructor() {
        this.name = 'wangzi';
        // this.add = function() {
        //     return that.prototype === this.prototype;
        // };
    }
    add() {
        return this.name;
    }
    toString(){
        return 'toString';
    }
};

Dog.prototype.a = function () {
    return 'dog';
};
var dog = new Dog();


Object.prototype.toString = function () {
    return 'object';
};

console.log(Function.prototype);

// Object.prototype.add = function () {
//     return 'sad';
// };
// const add1 = dog.add;
// console.log(add1.toString());
// console.log(dog.hasOwnProperty('add'));

// class Hi {
//     constructor() {
//         this.a = 'a';
//     }
//     add() {
//         console.log(this);
//     }
// }

// let hi = new Hi();
// console.log(hi.__proto__ === Hi.prototype);
// console.log(hi.hasOwnProperty('a'));
// console.log(hi.__proto__.hasOwnProperty('add'));

// let test = function() {
//     console.log(this);
// };
// test();


// var obj = {
//     x: 0,
//     f1: function () {
//         console.log(this.x);
//     }
// };
// var x = 1;
// var f1 = obj.f1;

// obj.f1(); //0
// f1(); //1

// function Timer(){
//     this.s1 = 0;
//     this.s2 = 0;
//     //箭头函数
//     setInterval(() => {
//         this.s1++;
//     }, 1000);
//     //普通函数
//     setInterval(function (){
//         console.log(this.s2);
//         this.s2++;
//     }, 1000);
// }
// var timer = new Timer();
// setTimeout(() => console.log('s1: ', timer.s1), 3100);  //s1:  3
// setTimeout(() => console.log('s2: ',timer.s2), 3100);   //s2:  0

// this.a = 'a';
// console.log(this);
