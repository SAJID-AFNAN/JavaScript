function cubeNumber(number) {
    let check = Number.isInteger(number);
    if (check == true) {
        const result = Math.pow(number, 3);
        return result;
    }
    else {
        return "Invalid Input";
    }
}

var output = cubeNumber(-5);
console.log(output);
