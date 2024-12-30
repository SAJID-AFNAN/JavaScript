var arr = [30, 49, 490, 409];
arr.push(35)
arr.pop()
arr.unshift(33)     //added in the 0 index or first 
arr.shift()
console.log(arr.includes(490));     //true

// console.log(arr);
// console.log(arr.length);
var nme = ['sajid', 'radim', 'shuvo', 'shsishir'];
// console.log(nme);

var arr_2 = [10, 20, 30, 40, 50];
var size = arr_2.indexOf(23);   // index number of 30 if exist
// console.log(size);
// console.log(arr_2[4])


const newArr = arr_2.join()
// console.log(newArr);
// console.log(typeof newArr);

// Difference between slice and splice
console.log("Normal main Array", arr_2);

const myn1 = arr_2.slice(1, 3)
console.log(myn1);
console.log("After slice main array", arr_2);

const myn2 = arr_2.splice(1, 3)
console.log(myn2);
console.log("After splice main array", arr_2);