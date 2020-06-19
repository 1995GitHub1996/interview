/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num = 0;
    for(let i=0; i< nums.length; i++){
        num ^= nums[i];
    }

    return num;
};
const arr = [4, 1, 2, 2, 3, 4, 1];
console.log(singleNumber(arr));