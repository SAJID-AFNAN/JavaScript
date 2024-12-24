function number(num_1,num_2,num_3){
    let big = Math.max(num_1,num_2,num_3);
    return big;
}
function small(num_1,num_2,num_3){
    let sml = Math.min(num_1,num_2,num_3);
    return sml;
}


let Bignum = number(35,56,93);
console.log(Bignum);
let smlnum = small(35,56,93);
console.log(smlnum);