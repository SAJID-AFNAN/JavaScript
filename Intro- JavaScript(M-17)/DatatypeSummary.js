//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Asif", "Tuhin", "Ontor"];
let myObj = {
    name: "shanto",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// Memory types --------

// (1) Stack (Primitive) (2) Heap(Non-Primitive)

// Stack Example (change by the copy one)
let firstName = "mamun";
let anotherName = firstName;

anotherName = "Adil"

console.log(firstName);
console.log(anotherName);

//Heap Example (change by reference)
let userFirst = {
    email: "nadis@abis.com",
    no: 38409239949
}

let userSecond = userFirst
userSecond.email = "valo@kintokalo.com"

console.log(userFirst.email);
console.log(userSecond.email);