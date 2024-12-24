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

let array = [5, 9];
let output = sortMaker(array);
console.log(output);