function maxinarray(number) {
    let largest = number[0];
    for (let i = 0; i < number.length; i++) {
        if (number[i] > largest) {
            largest = number[i];
        }
    }
    return largest;
}
const height = [176, 190, 165, 120, 170, 365];
const tallest = maxinarray(height);
console.log("Tallest person is :", tallest);