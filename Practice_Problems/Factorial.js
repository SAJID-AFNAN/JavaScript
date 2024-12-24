function factorial(num) {
    let mul = 1;
    for (let i = 1; i <= num; i++) {
        mul = mul * i;
    }
    console.log(num,"Factorial is : ",mul);
}

factorial(5);




