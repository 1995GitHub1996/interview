var handle = function(nums, k) {
    let count = 0;
    let i = 0;
    const j = nums.length - 1;

    while (i < j) {

        while (i < j && nums[i] === nums[i + 1]) {
            i++;
            count++;                // 重复元素次数
        }

        i++;
        if( (i + 1 - count) === k){
            console.log('i:' + i);
            console.log('res:' + nums[i]);
            console.log('count:' + count);
            break;
        }
    }
};


const arr = [2,4,4,4,6,7,7,8];

handle(arr, 5);