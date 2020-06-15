function partition(array, left, right) {
    let k = array[left];
    let i = left;
    let j = right;
    while (j > i) {
        while (array[j] < k && j > i) {
            j--;
        }
        if (j > i) {
            array[i] = array[j];
            i++;
        }
        while (array[i] > k && j > i) {
            i++;
        }
        if (j > i) {
            array[j] = array[i];
            j--;
        }
    }
    array[i] = k;
    return i;
}

function quickSort(array, left, right) {
    if (left >= right) {
        return;
    }
    let i = partition(array, left, right);
    quickSort(array, left, i - 1);
    quickSort(array, i + 1, right);
}

const arr = [2,4,4,4,6,7,7,8];
quickSort(arr, 2);