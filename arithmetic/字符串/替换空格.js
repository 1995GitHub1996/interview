
// 需要注意的是，JavaScript 的字符串是不可变的（immutable），String 类定义的方法都不能改变字符串的内容。
// 像 String.toUpperCase() 这样的方法，返回的是全新的字符串，而不是修改原始字符串。

// js字符串的行为就像只读的字符数组 故下面代码无法运行～～～ 参考思路
var handle = function(sting, length) {
    // 源字符串长度
    let originStringLength  = 0;    

    // 空格字符串长度
    let blankLength  = 0;

    // 新字符串长度(空字符串替换成%20后的长度)
    let newStringLength  = 0;

    let i = 0;
    while (i < string.length) {                 // 时间复杂度 O(n)
        originStringLength++;
        if(sting[i] === ' ') blankLength++;
        i++;
    }

    let originStringIndex = originStringLength - 1;
    let newStringIndex = originStringLength + blankLength * 2 - 1;

    if(newStringLength > length) return;

    while(originStringIndex > 0 && newStringIndex > originStringIndex){
        if(string[originStringIndex] === ' '){
            string[newStringIndex--] = '0';
            string[newStringIndex--] = '2';
            string[newStringIndex--] = '%';
        } else {
            string[newStringIndex--] = string[originStringIndex];
        }

        originStringIndex--;
    }
};

const string = 'hello word!';

handle(string, 100);