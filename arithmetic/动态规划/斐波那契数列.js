/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 */

 // dp table
var fib1 = function(n) {
    const dp = [1, 1];
    for (let i = 2; i < n; i++) {
        const a = dp[i-1] + dp[i-2];
        dp.push(a);
    }

    return dp[n-1];
};

console.log(fib1(20));

// 优化空间复杂度
var fib2 = function(n) {
    if(n === 1 || n === 2) {
        return 1;
    }
    let prev = 1, cur = 1;
    for (let i = 2; i < n; i++) {
        let sum = prev + cur;

        prev = cur;
        cur = sum;
    }

    return cur;
};

console.log(fib2(20));


