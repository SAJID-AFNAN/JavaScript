const student = {
    name: 'Sajid Afnan',
    age: 23,
    live: 'Bangladesh',
    institute: 'Faridpur Engineering College',
    college: 'Chittagong Port college ',
    Balance : 1100
}
console.log(student)
const property = Object.keys(student)
// console.log(property);

const value = Object.values(student)
// console.log(value)

//array of array Or tow dimentional array 
const entries = Object.entries(student)
// console.log(entries)

// Deleting from object 2 ways

delete student.college;
// console.log(student)
const { college, ...clg } = student;
console.log(student)
 
// Freeze  (You can do nothing if freeze mode on)
Object.freeze(student);
student.location = 'Faridpur';
student.Balance = 7000;
console.log(student)

//seal (You can change anything but not to be added if seal mode on)
Object.seal(student);
student.location = 'Faridpur';  //it' s not added because seal mode on
student.Balance = 7000;     //it's updated
console.log(student)