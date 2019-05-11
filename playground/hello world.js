// let num = 9;
// console.log(`${num} beew`);


// const nums = [];
// for (let i = 0; i < 5; i++) {
//     nums.push(i * 2);
// }


const nums = [];
for (var i = 0; i < 5; i++) {
    nums.push(
        function () {
            return i * 2; 
        }
    );
}

console.log(nums[3]());
console.log(nums[1]());
