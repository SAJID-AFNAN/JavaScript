var nam = 'Sajid Afnan';
let N = nam.toLocaleLowerCase();
console.log(N);


//searching string word
let address = 'akbar SHAH thana. pahartali chattagram bblock. firoz ShAh';
let little = address.includes('pahar');
console.log(little);

let again = address.toLocaleLowerCase();
let src = again.includes('shah');
console.log(src);

console.log(address.indexOf('thana'));    //show the starting index of thana

//startWith check
console.log(address.startsWith('akbar'));
//EndWith check
console.log(address.endsWith('akbar'));

let word = address.split(' ');
console.log(word);
let sentences = address.split('.');
console.log(sentences);
let char = address.split('');
console.log(char);

console.log(address.slice(5,13));
console.log(address.substring(5,17));

const newadd = [
    'akbar',
    'SHAH',
    'thana.',
    'pahartali',
    'chattagram',
    'bblock.',
    'firoz',
    'ShAh'
  ]
const makenew = newadd.join(': ');
console.log(makenew);

