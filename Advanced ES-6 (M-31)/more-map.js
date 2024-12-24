// Always Remember map,do for each element returns value an array  
const numbers = [4, 6, 7, 6, 4, 3]

const tripple = numbers.map(num => num * 3)
// console.log(tripple)

const added = numbers.map(sum => sum + 5)
// console.log(added)

const sqr = numbers.map(mul => mul * mul)
// console.log(sqr);

const friends = ['radim', 'asif', 'shubo', 'hasor', 'shishir']
const length = friends.map(name => name.length);
console.log(length)

const first = friends.map(letter => letter[0])
console.log(first)

// console.log(friends[0]);