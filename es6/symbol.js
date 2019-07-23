let mySymbol = Symbol();
let mySymbol1 = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!'; 
a[mySymbol1] = 'Helloads!'; 

// // 第二种写法
// let a = {
//   [mySymbol]: 'Hello!'
// };

// // 第三种写法
// let a = {};
// Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
// console.log(a[mySymbol]); // "Hello!"
// console.log(a[mySymbol1]); // "Hello!"

// console.log(Reflect.ownKeys(a));


// global._foo = { foo: 'world' };
// const v = require('./symbol1.js');

// console.log(v.foo);
// console.log(Symbol.for('foo') === Symbol.for('foo'));
// console.log(Symbol('foo') === Symbol('foo'));

class MyClass {
    toString(obj) {
        return obj;
    }
    [Symbol.hasInstance](foo) {
        console.log(foo);
        return foo instanceof Array;
    }
}

console.log(new MyClass().toString('dd')); // true)
console.log([1, 2, 3] instanceof new MyClass()); // true)