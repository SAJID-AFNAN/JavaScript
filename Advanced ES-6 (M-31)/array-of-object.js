const products = [
    { id: 1, name: 'Mac', price: 164000 },
    { id: 2, name: 'dell', price: 74000 },
    { id: 3, name: 'hp', price: 57000 },
    { id: 4, name: 'lenovo', price: 54000 }
]

// for (const full of products) {
//     console.log(full.name)
// }

// map
const names = products.map(product => product.name)
console.log(names);
const price = products.map(p => p.price)
console.log(price)

// foreach 
products.forEach(p => console.log(p.id))

// Filter 
const expensive = products.filter(num => num.price > 70000)
console.log(expensive)
const Name = products.filter(N => N.name.length > 3)
console.log(Name)

// Find 
const effortable = products.find(pro => pro.price < 60000)
console.log(effortable)

//reduce 
const redud = products.reduce((accum, current) => accum + current.price, 0)
console.log(redud)