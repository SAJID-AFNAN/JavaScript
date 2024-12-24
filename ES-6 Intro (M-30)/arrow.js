//function declaration 

// function add1(a, b) {
//     const sum = a + b;
//     return sum;
// }
function add1(a, b) {
    return a + b;
}

//function expression 

const add2 = function (a, b) {
    return a + b;
}

//function arrow 
const add3 = (a, b) => a + b

const result = add3(5, 6);
console.log(result)

