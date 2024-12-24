function add(num1,num2){
    console.log(num1,num2);
    console.log(arguments);     //show the over value and it's an array like object
    console.log(arguments[4]);
}

add(23,34,73,59,29,86); 