function oddnumber(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 != 0){
            sum = sum + num[i];
        }
    }
    console.log("Sum of the numbers :",sum);
    // return sum ;
}

const array = [12, 23, 34, 45, 46, 67];
let add = oddnumber(array);
// console.log("Sum of the numbers : ",add);