// Filter works only for condition 
const players = [77, 43, 89, 67, 58, 51]
// const selected = players.filter(n => n > 90)
// const selected = players.filter(n => n > 80)
const selected = players.filter(n => n % 2 === 1)
// const selected = players.filter(n => n + 2)     it's not working 
console.log(selected)

const friends = ['rifat', 'arif', 'nayeem', 'hasan']
const frnd = friends.filter(name => name.length > 4)
console.log(frnd)