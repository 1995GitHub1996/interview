var handle = function(nums, k) {
    let i = 0, j = nums.length - 1;
    while( i < j){
        if(nums[i] + nums[j] === k) {
            console.log(i, j);
            return;
        } else if(nums[i] + nums[j] > k){
            j--;
        } else {
            i++;
        }
    }

    console.log('no');
};


const arr = [2,4,4,4,6,7,7,8];

handle(arr, 13);