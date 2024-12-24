const numbers = [1, 3, 5, 7, 9]

const arr = [];
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        const num = numbers[i] + 1;
        arr.push(num)
    }
    else {
        arr.push(numbers[i])
    }
}
console.log(arr)


// With map 
const array = numbers.map(num => {
    if (num % 2 != 0) {
        num = num + 1;
    }
    return num;
})
console.log(array)

