function cubeNumber(number) {
    if (typeof number === 'string' || number instanceof String) {
        console.log("It is a string")
    }
    else {
        const result = Math.pow(number, 3);
        return result;
    }
}

var output = cubeNumber("Sajid");
console.log(output);



