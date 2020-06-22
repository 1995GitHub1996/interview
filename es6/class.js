// class MyClass {
//     constructor(){
//         this.a = 'a';
//         this.getThis = () => {
//             return this;
//         };
//     }
//     static sta() {
//         console.log(this);
//         console.log('this is static');
//     }
//     static getThis() {
//         console.log('sfsf');
//     }
//     test() {
//         console.log('test');
//     }
//     [Symbol.hasInstance](foo) {
//         return foo instanceof Number;
//     }
//   }

// const a = new MyClass();
// a.test();                       // test
// MyClass.getThis();        // MyClass { a: 'a', getThis: [Function] }
// console.log([1, 2, 3] instanceof new MyClass());

// const fn = myClass.getThis;
// console.log(fn().getThis());                      // 调用实例的getThis的getThis方法， 而不是prototype上的getThis方法


class Animal {
    constructor() {
        this.name = 'this is animal';
    }
    common() {
        return 'i am common';
    }
}

class Dog extends Animal {
    constructor() {
        super();
        this.name = 'this is dog';
    }
}

const dog1 = new Dog();
console.log(dog1);
console.log(dog1.common());
