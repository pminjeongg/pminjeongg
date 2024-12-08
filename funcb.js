let a = 1;
let b = 2;
let c = 3;
let d = 4;

const add = (x, y) => x + y;

const result1 = add(a, b); // 1 + 2 = 3
const result2 = add(result1, c); // 3 + 3 = 6
const result3 = add(result2, d); // 6 + 4 = 10

console.log(result1); // 3
console.log(result2); // 6
console.log(result3); // 10
