const arr = [3, 5, 7, 1, 5]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

for(const num of arr){
    // console.log(num);
}

const string = 'urisshar nobab Siraj Uddowla'
for(const nobab of string){
    // console.log(nobab)
}

//But you are not appling for of loop on object 
const student = {
    name: 'Sajid Afnan',
    age: 23,
    live: 'Bangladesh',
}
// for(const key of student){
//     console.log(key);
// }
for(const key in student){      //you can apply for in loop on object
    const value = student[key];
    console.log(key , value);
}

//technically for of loop use in object 
const keys = Object.keys(student)
for(const property of keys ){
    const values = student[property]
     console.log(property ,values);
}
