var number = [34, 45, 56, 23, 67];
console.log("Before push : ");
console.log(number);
number[2] = 60;
// using push operation to add somthing after last element of the array
number.push(90);
console.log("After push :");
console.log(number);

// using pop operation to delete last element of the array
// number.pop();
var element = number.pop();     //show which element delete from the array
console.log("After pop : ");
console.log(number);
console.log(element);

console.log("Delete element from first :")      
number.shift();             //Delete first element form first index
console.log(number);
console.log("Add element of first :")
number.unshift(55);         //Add element into first index
console.log(number);

