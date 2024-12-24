const arrow = (num1, num2) => {
    console.log(num1)
    console.log(num2)
    const combine = [...num1, ...num2]
    // const NewArr = [combine]
    const max = Math.max(...combine)
    console.log(max);
}

const arr1 = [4, 5, 7, 8, 9, 3]
const arr2 = [5, 7, 2, 9, 6, 4]
const com = arrow(arr1, arr2);
// console.log(com)
