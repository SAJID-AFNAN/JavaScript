const instructor = [
    { name: 'Nodi', age: 28, position: 'senior' },
    { name: 'akhil', age: 24, position: 'junior' },
    { name: 'sobuj', age: 26, position: 'senior' }
]
const Filter = instructor.filter(obosthan => obosthan.position == 'senior')
console.log(Filter)