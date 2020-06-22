/**
 * @param {number[]} num
 * @return {number}
 */

 // 把一个数减去1，再和原整数做与运算，会把该整数右边1变为0
var numberOfF1 = function(num) {
    let count = 0;
    while (num) {
        count++;
        num = (num - 1) & num;
    }

    return count;
};
console.log(numberOfF1(7));


//  111 - 1 = 110
//  110 - 1 = 101 