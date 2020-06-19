const { isSafeInteger } = require('lodash');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const newArray = [];

    for(let j=0; j< nums.length; j++){
        newArray[j] = 1;
        for(let i = 0; i < nums.length; i++){
            if( i !== j ) {
                newArray[j] *= nums[i];
            }
        }
    }

    return newArray;
};

const nums = [2, 7, 3];
console.log(productExceptSelf(nums));