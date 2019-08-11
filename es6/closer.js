// function count() {
//     var arr = [];
//     for (var i=1; i<=3; i++) {
//         arr.push(function () {
//             return i * i;
//         });
//     }
//     return arr;
// }

// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];

// console.log(f1(), f2(), f3());  // 16 16 16c
function init() {
    var name = 'Mozilla'; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数,一个闭包
        console.log(name); // 使用了父函数中声明的变量
    }
    return displayName;
}
init()();
