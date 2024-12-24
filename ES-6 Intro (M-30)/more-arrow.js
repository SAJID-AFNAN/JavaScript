const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

///single parameter (use or not first bracket as you can)

const getAge = (person) => person.age;
const student = { name: 'sajid afnan', age: 23, from: 'chittagong' }
const age = getAge(student);
console.log(age);

const third = array => array[3]
const getThird = third([3, 4, 5, 6, 71])
console.log(getThird)

//No parameter 
const getPI = () => Math.PI;
console.log(getPI())

//Large function arrow 
const domath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result;
}