//system  - 1
let first = 5;
let second = 7;
console.log(first,second);
const temp = first;
first = second;
second = temp;
console.log(first,second);


//system -2 
[first , second ] = [second , first];
console.log(first,second);