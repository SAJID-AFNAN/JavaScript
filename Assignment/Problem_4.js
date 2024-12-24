function findAddress(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);

    const arr = ["street", "house", "society"];
    let array = [];
    for (let i = 0; i < 3; i++) {
        let ind = keys.indexOf(arr[i]);
        if (ind == -1)
            array.push("__");
        else
            array.push(values[ind]);

    }
    return array.join(",");
}

let obj = { street: 10, house: "15A" , society: "Earth Perfect" };
let output = findAddress(obj);
console.log(output);