function reverse(text) {
    let words = text.split(' ');
    let result = [];
    for (let i = words.length - 1; i >= 0; i--) {
       result.push(words[i]);
    }
    let rever = result.join(' ');
    return rever;
}


let string = 'I am good boy';
let output = reverse(string);
console.log(output);