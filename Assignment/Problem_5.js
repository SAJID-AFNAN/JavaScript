function canPay(changeArray, totalDue) {
    let sum = 0;
    for(let i = 0; i < changeArray.length; i++){
        sum = sum + changeArray[i];
    }
    if(sum == 0){
        return "The array is Empty";
    }
    else if(sum >= totalDue){
        return true;
    }
    else 
        return false;
}

const  array = [1,4,5];
const chips = 10;
let output = canPay(array , chips);
console.log(output);