/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 */
var maxSubArray = function(nums) {
    for(let i = 1; i< nums.length - 1; i++){
        if(nums[i - 1] > 0){
            nums[i] += nums[i-1]; 
        }
    }

    return Math.max(...nums);
};

const  arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr));

