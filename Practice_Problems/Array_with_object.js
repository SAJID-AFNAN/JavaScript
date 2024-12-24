let products = [
    {id : 1, name : "macbook", price : 6500},
    {id : 2, name : "iphone", price : 6500},
    {id : 3, name : "xiami phone", price : 6500},
    {id : 4, name : "vivobook", price : 6500},
    {id : 5, name : "motorola phone", price : 6500},
    {id : 6, name : "realme phone", price : 6500},
    {id : 7, name : "samsung phone", price : 6500},
    {id : 8, name : "notebook", price : 6500},
    {id : 9, name : "huawei Phone", price : 6500},
]

function matchfinder(array,search){
    let arr = [];
    for(const product of array){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            arr.push(product);
        }
    }
    return arr;
}

let result = matchfinder(products,'Phone');
console.log(result);





// for(const product of products){
//     console.log(product.name);
// }

// for(let i = 0 ; i<products.length; i++){
//     let product = products[i];          //here product is a an object and products is an array
//     console.log(product.name);
// }