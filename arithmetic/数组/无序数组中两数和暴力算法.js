var twoSum = function(nums, target) {
    let result = [];
    let flag = false;
	
    for(let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                result = [i, j];
                flag = true;
                break;
            }
        }
        if(flag) break;
    }
    console.log(result);
};


const nums = [3,6,2,5,6,0];
const target = 6;

twoSum(nums, target);