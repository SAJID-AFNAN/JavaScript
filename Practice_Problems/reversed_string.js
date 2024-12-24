function reversestring(text) {
    reversed ='';
    for (let i = text.length - 1; i >= 0; i--) {
        reversed = reversed + text[i];
        // console.log(text[i] , reversed);
    }
    return reversed
}

const string = "i am a good boy ";
let output = reversestring(string);
console.log(output);