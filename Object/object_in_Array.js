const shopinglist = {
    cloths : 3,
    pen : 4 ,
    pencil : 5,
    mobile : 1,
    mouse : 1,
    brand : "start tech"
}
var x = Object.keys(shopinglist);
var y = Object.values(shopinglist);
console.log(x);
console.log(y);
// console.log(Object.keys(shopinglist));
// console.log(Object.values(shopinglist));



//there are 3 differnet types to find keys values
console.log(shopinglist.mouse);

var x = shopinglist['mouse'];       // same output as upper line 
console.log(x);

// also 3 different type to set the new key values
shopinglist.mobile = 2;
console.log(shopinglist);