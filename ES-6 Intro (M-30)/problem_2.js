const arrow = (Array) => {
    const arr = [];
    // for (let i = 0; i < Array.length; i++) {
    //     console.log(Array[i].length)
    // }

    for (const name of Array) {
        if (name.length % 2 != 0) {
            arr.push(name);
        }
    }
    return arr;
}


const friends = ['radim', 'sajid', 'shuvo', 'shishir', 'benjir', 'towfiq', 'hasor']
const result = arrow(friends);
console.log(result);