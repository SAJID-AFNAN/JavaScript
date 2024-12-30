const array = ["shubo", "mahfuz", "roni", "rubel"]
const array2 = ["bijoy", "niloy", "rana", "atik"]

const anotherArray = array.concat(array2)
// console.log(anotherArray);
// console.log([...array, ...array2 ]);      //its better way 

const num = [1, 2, 3, [4, 5, 6], 8, [2, 4, [5, 6,]]]
const realNum = num.flat(Infinity)

// console.log(num);
// console.log(realNum);

console.log(Array.isArray("liliphut"));
console.log(Array.from("liliphut"));        //convert to array 
console.log(Array.from({ name: "Aziz" }));      //Interesting case

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));      //convert to array