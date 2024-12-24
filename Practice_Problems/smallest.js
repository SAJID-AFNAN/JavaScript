function mininarray(number) {
    let lowest = number[0];
    for (let i = 0; i < number.length; i++) {
        if (number[i] < lowest) {
            lowest = number[i];
        }
    }
    return lowest;
}
const height = [176, 190, 165, 120, 170, 365];
const smallest = mininarray(height);
console.log("Lowest person is :", smallest);