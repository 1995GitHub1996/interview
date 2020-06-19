const { isSafeInteger } = require('lodash');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};

    for(let i=0; i< nums.length; i++){
        const ele = nums[i];
        const other = target - ele;

        if(isSafeInteger(obj[other])){
            return [i, +obj[other]];
        } else {
            obj[ele] = i;
        }
    }
	
    console.log(obj);
    return 'no';
};

const nums = [2, 7, 11, 15], target = 22;
console.log(twoSum(nums, target));
