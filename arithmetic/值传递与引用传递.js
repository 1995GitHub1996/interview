// 引用传递
let reference = function(num) {
    num.push(2);
    console.log(num);
};
const a = [1];
reference(a);
console.log(a);			// 输出 [1,2]  [1,2]


// 值传递
let value = function(num) {
    num++;
    console.log(num);
};
const b = 1;
value(b);
console.log(b);			// 输出 2  1