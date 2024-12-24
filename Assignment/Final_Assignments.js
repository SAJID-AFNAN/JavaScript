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



function sortMaker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] >= 0 && arr[1] >= 0) {
            if (arr[0] == arr[1]) {
                return "equal";
            }
            else if (arr[1] > arr[0]) {
                let temp = arr[1];
                arr[1] = arr[0];
                arr[0] = temp;
                return arr;
            }
            else
                return arr;
        }
        else
            return "invalid";
    }
}



function findAddress(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);

    const arr = ["street", "house", "society"];
    let array = [];
    for (let i = 0; i < 3; i++) {
        let ind = keys.indexOf(arr[i]);
        if (ind == -1)
            array.push("__");
        else
            array.push(values[ind]);

    }
    return array.join(",");
}



function canPay(changeArray, totalDue) {
    let sum = 0;
    for(let i = 0; i < changeArray.length; i++){
        sum = sum + changeArray[i];
    }
    if(sum == 0){
        return "The array is Empty";
    }
    else if(sum >= totalDue){
        return true;
    }
    else 
        return false;
}


