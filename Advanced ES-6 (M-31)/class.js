const products = [
    { id: 1, name: 'Mac', price: 164000 },
    { id: 2, name: 'dell', price: 74000 },
    { id: 3, name: 'hp', price: 57000 },
    { id: 4, name: 'lenovo', price: 54000 }
]

class product {
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`Talking about ${talk}`)
    }
}

const call = new product('Class to mathay duke na');
console.log(call)
call.speak('on exam')


class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log('Sir is teaching math')
    }
}

const topon = new Teacher('Topon-Sir', 'Physics')
console.log(topon)

const jahangir = new Teacher('Jahangir-Sir', 'Chemistry')
console.log(jahangir)
jahangir.lecture()