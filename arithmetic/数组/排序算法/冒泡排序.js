var bubble_sort = function(nums) {
    for (let i = 0; i < nums.length - 1 ; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if(nums[j] > nums[j + 1]){
                const temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    console.log(nums);
};


const arr = [3,6,2,5,6,0];

bubble_sort(arr);