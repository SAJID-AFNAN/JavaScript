const instructor = [
    { name: 'Nodi', age: 20 },
    { name: 'akhil', age: 15 },
    { name: 'sobuj', age: 22 }
]
let sum = 0;
for (let i = 0; i < instructor.length; i++) {
    const age = instructor[i].age;
    sum = sum + age;
}
console.log(sum)

// Reduce method
const boyos = instructor.reduce((sum,cur) => sum + cur.age, 0)
console.log(boyos)

// let odd = 0
// for(let cur of instructor){
//     const age =  cur.age;
//     odd = odd + age;
// }
// console.log(odd);