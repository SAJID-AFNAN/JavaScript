const actor = {
    name: 'Ananta ',
    age: 30,
    phone: '015843928',
    money: 75493.08
}

// if right side is an object left side of destructuring will be object as will
// use property name as a variable that contains the property value
const { name, age, phone: mobile } = actor;

// const name = actor.name;
// const age = actor.age
// const phone = actor.phone

console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(age);
console.log(age);
console.log(age);
// console.log(phone);
console.log(mobile);

//array destructuring 
const numbers = [45, 67]
const [first, second] = numbers;
const [x, y] = [4, 5]   //that means x= 4 and y = 5

//advanced
function doublethem(a, b) {
    return [a * 2, b * 2];
}
const [num1, num2] = doublethem(5, 6);  //remember uncer the name in []-> is also a variable 
console.log(num1,num2);