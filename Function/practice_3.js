function make_avg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

var array = [10, 20, 30, 40, 50];
var mark = make_avg(array);
console.log(mark);