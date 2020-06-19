// 斐波那契数列 
// 效率很低的算法 挑剔的面试官不会喜欢哦 ~~
var fibonacci = function(num) {
    if(num <= 0) return 0;

    if(num === 1) return 1;

    return fibonacci(num-1) + fibonacci(num-2);
};

// 计算 f(50) 就崩！！！！！！
const result = fibonacci(10);
console.log(result);