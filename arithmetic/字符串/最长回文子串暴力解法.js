const { max } = require('lodash');

function maxSubString(str) {
    let maxNum = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            maxNum = Math.max(maxNum, isSubString2(str, i, j));
        }
    }

    return maxNum;
}


function isSubString2(str, i, j) {
    if(i < j) {
        if(str[i] !== str[j]) return 0;
    } else {
        i++;
        j--;
    }

    return str.length;
}

console.log(maxSubString('fdgdf'));
