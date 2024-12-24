function make_avg(num_1, num_2, num_3){
    var sum = num_1 + num_2 + num_3;
    var avg = sum / 3;
    return avg;
}

var mark = make_avg(10,20,30);
console.log(mark);
