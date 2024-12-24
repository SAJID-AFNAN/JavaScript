function matchFinder(string1, string2) {
    let check1 = Number.isInteger(string1);
    let check2 = Number.isInteger(string2);
    if (check1 == true || check2 == true) {
        return "Please insert a String";
    }
    else {
        let string = string1.includes(string2);
        return string;
    }
}

let string1 = "stick";
let string2 = "sti";
let output = matchFinder(string1, string2);
console.log(output);