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


// function init() {
//     var a = 1;
//     function displayName() {
//         var b = 1;
//         console.log(++a);
//         console.log(++b);
//     }
//     return displayName;
// }
// const fn = init();  
// fn();                       // 2 2
// fn();                       // 3 2

// var weaver = 'to cc百川？？？';
// var obj = {
//     weaver:'to cc百川！！！',
//     getWeaver: () => {
//         console.log(this);
//     },
    // fnobj:() => { 
    //     this.a = 'fsdf';
    //     fnobj1 = () => {
    //         console.log(this);
    //         fnobj2();
    //     };
    //     function fnobj2() {
    //         console.log(this.weaver);
    //     }
    //     // fnobj3 = () => {
    //     //     console.log(this.weaver);
    //     // };
    //     fnobj1();
    // }
// }; 
// obj.getWeaver();

var x = 11;
var obb = {
    x: 222,
    y: {
        x:333,
        obc: function(){
            console.log(this);
            var x = 111;
            var obj = {
                x: 22,
                say: () => {
                    console.log(this.x);
                }
            };
            obj.say();
        }
    }
};
obb.y.obc();