
// 1 ： 
// async function testAsync() {
//     return "hello async";
// }

// // const result = testAsync();
// // console.log(result);  //返回一个Promise对象

// testAsync().then((v)=>{
//     console.log(v);    //返回hello async
// })

// 2 ： 
// async function testAsync() {
//     return Promise.resolve("hello async");
// }

// const result = testAsync();
// console.log(result);

//3:

//  async function getSomething() {
//     return "something";
// }

//  function testAsync() {s
//     return  new Promise(r=>{
//             setTimeout(() => {
//                 r('dwq');
//             }, 1000);
//         }).then(f=>{
//             return f;
//         })
// }


// async function test() {
//     const v1 = await testAsync();
//     const v2 = await getSomething();
//     console.log(v1, v2);
// }

// test();


// function takeLongTime() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("long_time_value"), 1000);
//     });
// }

// takeLongTime().then(v => {
//     console.log("got", v);
// });


// function takeLongTime() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("long_time_value"), 1000);
//     });
// }

// async function test() {
//     const v = await takeLongTime();
//     console.log('asfsdf');
// }

// test();

async function fn() {
  await new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, 1000);
  })
  console.log('dsadasdad')
}

fn()
// async function test() {
//   let a;
//   await fn();
// }

console.log('sad')
// fn().then(e => console.log(e), r => console.log('rr'))