console.log(1)
console.log(2)

const timeout = setTimeout(() => {      //Once 
    console.log('After three second')
}, 3000);

let num = 0;
const interval = setInterval(() => {    //Repeat 
    num++
    console.log(num)
    if(num == 10){
        clearInterval(interval);
    }
}, 1000)

console.log(4)
console.log(5)
console.log(6)

// clearInterval(interval);    // this function stop setInterval() 
// clearTimeout(timeout)       // this function stop setTimeout()