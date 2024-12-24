const numbers = [4, 5, 6, 7, 8, 3]
const total = numbers.reduce((previous, current) => previous + current, 0)
console.log(total)

const sum = numbers.reduce((pre, cur) => pre + cur, 0)
console.log(sum)
const mul = numbers.reduce((sum, current) => sum * current, 1)
console.log(mul)