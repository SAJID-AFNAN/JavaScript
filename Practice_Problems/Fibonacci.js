// const fibo = [0, 1];
// for (let i = 2; i < 5; i++) {
//     fibo[i] = fibo[i-1] + fibo[i -2];
// }
// console.log(fibo);

function fibonacci(fibo ,n) {
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo ;
}

let fibo = [0,1];
let output = fibonacci(fibo ,5);
console.log(output)