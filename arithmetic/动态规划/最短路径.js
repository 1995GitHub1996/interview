/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 */
var uniquePath = function(m, n) {
    let mem = [];
    for (let i = 0; i < n; i++) {
        mem.push([]); mem[i][0] = 1;
    }

    for (let i = 0; i < m; i++) {
        mem[0][i] = 1;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            mem[i][j] = mem[i][j-1] + mem[i-1][j];
        }
    }
    return mem[n-1][m-1];
};

console.log(uniquePath(7, 3));

