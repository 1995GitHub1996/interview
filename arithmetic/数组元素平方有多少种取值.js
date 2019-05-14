var handle = function(nums) {
    if(nums==null  || nums.length==0)
        return 0;
		
	// result的缩写，最后的返回值
    let res = 0;
   //i是前指针；j是后指针   
    let i = 0;

    let j = nums.length - 1;
    while (i <= j) {
        let num1=Math.abs(nums[i]);
        let num2=Math.abs(nums[j]);
        if (num1 > num2) {//移动i
            // 这两个数的绝对值不相等
            res += 1;
            // 过滤掉相邻的绝对值相等的数
            while(i<=j && Math.abs(nums[i])==num1)
                i++;
        } else if (num1 < num2) {// 这两个数的绝对值不相等    
            res += 1;
            while(i<=j && Math.abs(nums[j])==num2) //过滤掉相邻的绝对值相等的数 (注意while循环)          
                j--;
        } else {
            res += 1;
            while(i<=j && Math.abs(nums[i])==num1)//去重
                i++;
            while(i<=j && Math.abs(nums[j])==num2)//去重
                j--;
        }
    }
	
    console.log(res);
};


const arr = [-6,-5,-2,-2,-1,0,1,2,4,4];

handle(arr);