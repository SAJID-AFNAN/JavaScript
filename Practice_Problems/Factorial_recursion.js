function factorial(num){
    if(num < 0){
        return -1;
    }
    else if(num ==0){
        return 1;
    }
    else 
        return ( num * factorial(num -1));
}

let fact = factorial(5);
console.log("Factorial of 5 is ", fact);

