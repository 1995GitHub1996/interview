const nums = [1,5,3,4,3,2,2];

// 哈希表实现 时间复杂度O(n) 空间复杂度O(n)
var getRepeatNums1 = function(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if(map[nums[i]] === nums[i]){
            console.log(nums[i]);
        } else {
            map[nums[i]] = nums[i];
        }
    }
};

getRepeatNums1(nums);


// 重新排序实现 时间复杂度O(n) 空间复杂度O(1)
var getRepeatNums2 = function(nums, length = 0) {
    if(length <= 0){
        return false;
    }
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < 0 || nums[i] >= length) return false;
    }

    for (let i = 0; i < nums.length; i++) {
        while(nums[i] !== i) {
            if(nums[i] === nums[nums[i]]){
                console.log(nums[i]);
                return true;
            }
			// swap(nums[i], nums[nums[i]]);
            const temp = nums[i];
            nums[i] = nums[temp];
            nums[temp] = temp;
        }
    }

    return false;
};

let swap = function (i, j) {
    const temp = i;
    i = temp;
    j = i;

    return false;
};
getRepeatNums2(nums, 7);