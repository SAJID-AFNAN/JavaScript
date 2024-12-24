let a = 5;  //Global Context

//Funtional Context (crate first, then execute)
function add(num1,num2){
    const result = num1 + num2 + a;
    return result;
}

const sum = add(4,5);
console.log(sum)