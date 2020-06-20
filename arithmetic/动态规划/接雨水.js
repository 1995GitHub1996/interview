/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 */
// 接雨水暴力解法
var trap = function(nums) {
    let hight = 0;
    for (let i = 0; i < nums.length; i++) {
        const curEle = nums[i];
        let leftMax = 0, rightMax = 0;
        for (let k = 0; k < i; k++) {
            leftMax = Math.max(leftMax, nums[k]);
        }      
        
        for (let j = i + 1; j < nums.length; j++) {
            rightMax = Math.max(rightMax, nums[j]);
        }

        const curHeight = (Math.min(rightMax, leftMax) - curEle) > 0 ? (Math.min(rightMax, leftMax) - curEle) : 0;
        hight += curHeight;
    }

    return hight;
};

// 接雨水动态规划
var trap1 = function(nums) {
    let hight = 0, leftMax = [nums[0]], rightMax = [nums[nums.length - 1]];
    for (let i = 1; i < nums.length; i++) {
        const curEle = nums[i];
        leftMax.push(Math.max(curEle, leftMax[i - 1]));
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        const curEle = nums[i];
        rightMax.push(Math.max(curEle, leftMax[i + 1]));
    }

    for (let i = 1; i < nums.length - 1; i++) {
        const curHeight = Math.min(leftMax[i], rightMax[i]) - nums[i] > 0 ? Math.min(leftMax[i], rightMax[i]) - nums[i] : 0;
        hight += curHeight;
    }

    return hight;
};

const arr = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap1(arr));

