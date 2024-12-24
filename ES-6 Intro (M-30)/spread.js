const max = Math.max(34, 56, 92, 86, 90);
// console.log(max);

// const numbers = [34, 56, 87, 93, 50, 62]
// const arraymax = Math.max(numbers);
// console.log(numbers)
// console.log(arraymax)

const numbers = [34, 56, 87, 93, 50, 62]
const array = Math.max(numbers);
const arraymax = Math.max(...numbers);
// console.log(numbers)
// console.log(...numbers)
// console.log(array)
console.log(arraymax)

const friends = [45, 43, 65, 27, 77]
const bondu = friends;
bondu.push(97);
console.log(bondu)
console.log(friends)

const dosto = [...friends];
console.log(dosto)
friends.push(100)
console.log(dosto)
console.log(friends)

const sonkha = [...friends,23]  //directly add when copied 
console.log(sonkha)