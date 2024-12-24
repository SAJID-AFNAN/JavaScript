//default --> if value is not provided, take this as a default 
function numbmer(num1 = 0, num2 = 0) {
    result = num1 + num2;
    console.log(num1, num2, result)
}
// numbmer(4)
// numbmer(4,6)
numbmer()

function fullName(first, last = '') {
    const name = first + ' ' + last;
}

function array(arr = []) {

}
function object(obj = {}) {

}