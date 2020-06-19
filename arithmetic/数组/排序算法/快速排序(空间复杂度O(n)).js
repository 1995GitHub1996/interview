function quickSort(array) {
    if(array.length <= 1){
        return array; 
    }

    const left = [];   
    const right = [];
    // const pivot = array[0]; // 直接选最右边的元素为基准元素
    // console.log(pivot);
    var pivotIndex = Math.floor(array.length / 2);
    var pivot = array.splice(pivotIndex, 1)[0];
    console.log(array + '**');

    for (var i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right)); 
}

const array = [20,11,64,47,10,5,30];
const result = quickSort(array);
console.log(result);