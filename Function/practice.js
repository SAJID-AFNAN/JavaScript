//No return has parameter
function odd_even(num_1, num_2) {
    for (var i = num_1; i <= num_2; i++) {
        if (i % 2 == 0) {
            console.log(i, "is even");
        }
        else
            console.log(i ,"is odd");
    }
}

odd_even(12, 20);
// console.log("i is even ", even);