const arrow = (Array) => {
    let sum = 0;
    for (i = 0; i < Array.length; i++) {
        const mul = Array[i] * Array[i];
        sum = sum + mul;
    }
    const avg = (sum / (Array.length));
    return avg;
}

const arr = [2, 3, 4, 5, 6];
const sum = arrow(arr);
console.log(sum)