// const s = new Set();
// const arr = [1,2,2,3,3,5];

// arr.forEach(x=>s.add(x));

// console.log(s);
// console.log(s.size);

// arr.filter(f => 0);

// console.log(arr.filter(f => f%2==0));


//res : set 不会add重复的值


const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);

console.log(m2);
console.log(m3);

console.log(m3.get('baz'));

