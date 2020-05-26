// function count() {
//     var arr = [];
//     for (let i=1; i<=3; i++) {
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
    var a = 1;
    function displayName() {
        var b = 1;
        console.log(++a);
        console.log(++b);
    }
    return displayName;
}
const fn = init();
fn();
fn();
