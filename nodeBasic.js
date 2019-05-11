// {
//     var a = 1;
//     let b = 2;
// }

// console.log(a,b);

// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[3]();

// let { foo } = { foo: "aaa", bar: "bbb" };
// console.log(foo);

// let a = 8;
// let ms = {a};

// function getItem(key) {
//     return key in ms ? ms[key] : null;
// }

// function setItem(key, value) {
//     ms[key] = value;
// }

// function clear() {
//     ms = {};
// }
// ms['dwq'] = 9;

// console.log(ms);


// let lastWord = 'last word';

// const a = {
//     firstword: 'hello',
//     [lastWord]: 'world'
// };

// console.log(a);

// console.log(Object.is('1', 1));

// const [...arr] = ['r','e'];
// // console.log(q);
// // console.log(e);
// console.log(arr);

// const arr = [1,2,3,5,4,3,2];

// console.log(arr);
// console.log(new Set(arr));
// console.log(Array.from(new Set(arr)));


// console.log([...[1, 2, 3]])

// var x =1
// const arr = [
//     ...(x > 0 ? ['a'] : []),
//     'b',
// ];


// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// // arr1.push(arr2);
// // console.log(arr1);
// console.log([...arr1]);

// console.log(...'hello');

// console.log('x\uD83D\uDE80y');

// let map = new Map([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three'],
// ]);


// const {z:a=9,b=9} = {z:3};

// console.log(a);



// function foo({ x=6, y}) {
//     console.log(x, y);
// }

// foo({x:3});     //事实上  传递的是解构格式

// let c = 'dwq';
// const obj = {
//     c : 'ff'
// }

// const map = new Map();

// map.set(c,'gg')

// console.log(obj);
// console.log(map);

// var x = 5;
// foo({x:x,y:3}) // undefined 5

// console.log(...map.values());

// let arr = [...map.keys()]; // [1, 2, 3]

// console.log(map);

// export {x};

//  import - export
// require - module.exports


//-----
// start,limit ,type  

// const b =  {obj1:w,obj2} = {obj1:1,obj2:2}

// console.log(b);


// function abc({k,v=3}){
//     return v;
// }


// console.log(abc(1,2))
// console.log(abc(1))
// console.log(abc(null, 2))

// console.log(abc({v:10}))
// 箭头函数写法

// function name(z,...params) {
//     return params;
// }

// console.log(name(1, 2, 3));


// const map = new Map([
//     ['F', 'no'],
//     ['T', 'yes'],
// ]);

// console.log([...map.keys()]);

// function strMapToObj(strMap) {
//     let obj = Object.create(null);
//     for (let t of strMap) {
//         obj[t[0]] = t[1];
//     }
//     return obj;
// }

// const myMap = new Map()
//     .set('yes', true)
//     .set('bo', false);

// console.log(strMapToObj(myMap));
    
// console.log(0o10);

// console.log(Number.isInteger(25.1));

// var v= new Map();

// v.set('a','dwq');


// v.forEach((g,t,n) => {
//     console.log(g,t,n);
// })

// console.log(v);









// const n = arr.map(x => x * x);

// console.log(arr);
// console.log(n);

'use strict';

function foo() {
    for (var i = 0; i < 100; i++) {
        console.log(i);
    }
    i += 100; // 仍然可以引用变量i
    console.log(i+'**');
    
}

foo();
