const score = 500
console.log(score);

const num = new Number(300)
console.log(num);

console.log(num.toString().length);
console.log(num.toFixed(5))

const antoherNum = 34.58734
console.log(antoherNum.toPrecision(2));
console.log(antoherNum.toPrecision(4));

const taka = 50000000
console.log(taka.toLocaleString());     //its show as american style 
console.log(taka.toLocaleString('en-IN'));     //its show as indian style 


// ************************** Math *************************

// console.log(Math);     
// console.log(Math.abs(-4));
// console.log(Math.round(5.6));
// console.log(Math.ceil(7.3));
// console.log(Math.floor(7.9));

console.log(Math.random());     // pickup any random number between 0 to 1
// console.log(Math.random() * 10);
// console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);