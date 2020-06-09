// 只是求去重长度

function removeDuplicates(array) {
    let i = 0;    // 第一个指针
    let j;        // 第二个指针
    let n = array.length;
    if (n <=1 ) return n;        
    // 遍历数组
    for (j = 1; j < n; j++) {
        if (array[j] != array[i]) { // 若两个指针所指元素不同，则i+1位置保存j所指元素的值
            array[++i] = array[j];
        }
    }        
    return i+1;    // 返回新数组的长度
}

const a = [1,4,4,523,325];

console.log(removeDuplicates(a));
