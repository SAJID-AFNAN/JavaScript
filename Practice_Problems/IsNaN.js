const number = 23;
const arr = [23, 34, 67, 94, 60];
const object = {name : 'sajid', age : 22, from : 'chittagong'}
if(typeof number == "number"){
    console.log("value is a number");
}
else {
    console.log('value is not a number');
}
console.log(Array.isArray(arr))
console.log(Array.isArray(object))
console.log(typeof(object))

const nan = isNaN(23)     //NaN = Not a Number?
const string = isNaN('sajid')
console.log(nan)
console.log(string)

