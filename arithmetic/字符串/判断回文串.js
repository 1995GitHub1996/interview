// function isSubString1(str) {
//     const n = str.length / 2;
//     for (let i = 0; i < n; i++) {
//         if (str[i] !== str[str.length - i -1]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isSubString1('fdgdf'));


function isSubString2(str, i, j) {
    if(i < j) {
        if(str[i] !== str[j]) return false;
    } else {
        i++;
        j--;
    }

    return true;
}

console.log(isSubString2('fdgdf', 0, 4));