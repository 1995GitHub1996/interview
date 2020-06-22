const { max } = require('lodash');

function maxSubString(str) {
    let maxNum = 0, start = 0;
    for (let i = 0; i < str.length; i++) {
        let curNum = Math.max(getLen(str, i, i), getLen(str, i, i+1));
        if(curNum > maxNum){
            maxNum = curNum;
            start = i - ((maxNum -1) / 2);
        }
    }

    console.log(start);
    return str.slice(start, maxNum);
}


function getLen(str, i, j) {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
        i--;
        j++;
    }

    return j-i-1;
}
let str = 'fdgdf';
console.log(maxSubString(str));
