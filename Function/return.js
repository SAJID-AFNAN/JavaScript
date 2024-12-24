function add(num1,num2){
    var sum = num1 + num2;
    return sum;
}

var result1 = add(30,20);  //value return from function
var result2 = add(20,10);   //value return from function
var total = add(result1,result2);   //return value of result1 & result2 passes in function
console.log(total);