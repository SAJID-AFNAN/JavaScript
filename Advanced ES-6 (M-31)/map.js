// map ==> loop through each element of the array and do the operation that you can passed in the call back function and hold the result from each operation in an array and finally returns you the array 
const numbers = [4, 5, 6, 7, 8]
const doubled = []
for (const num of numbers) {
    const double = num * 2;
    doubled.push(double);
}
console.log(doubled);

//step -2 (with map)
function doubleit(num) {
    return num * 2;
}
const result = numbers.map(doubleit);
console.log(result);

//step - 3 (map)
const double2 = (num) => num * 2

const value = numbers.map(double2);
console.log(value);

// step -4
const output = numbers.map(num => num * 2)
console.log(output)


// for (let i = 0; i <= numbers; i++) {
//     let num = numbers[i];
// }
// console.log(num);
