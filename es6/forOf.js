// for in  支持break return continue

// let a = [1,2,3];
// for (const k of a) {
//     console.log(k);	
//     if(k === 1) return;
// }

// Iterator（遍历器）
// var it = makeIterator(['a', 'b']);

// console.log(it.next()); // { value: "a", done: false }
// console.log(it.next()); // { value: "b", done: false }
// console.log(it.next()); // { value: undefined, done: true }

// function makeIterator(array) {
//     var nextIndex = 0;
//     return {
//         next: function() {
//             return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {value: undefined, done: true};
//         }
//     };
// }

let iterable = {                    // 类数组对象可以使用 Array.prototype[Symbol.iterator]实现for……of
    0: 'a',
    1: 'b',
    2: 'c',
    [Symbol.iterator]: Array.prototype[Symbol.iterator],
    length: 3,
};
let a = ['s', 'd'];
console.log(a.toString());
console.log(Array.prototype[Symbol.iterator].toString());
for (let item of iterable) {
    console.log(item); // 'a', 'b', 'c'
}
