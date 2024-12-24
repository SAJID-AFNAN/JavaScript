class Person {
    constructor(name, old) {
        this.name = name;
        this.old = old;
    }
    sleep() {
        console.log(`The person who is sleeping his name ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const Radim = new Person('Ahteshamul Haque', 23)
console.log(Radim)
Radim.sleep()

const shuvo = new Person('Safaruzzaman', 24)
console.log(shuvo)
shuvo.activity()



// class adid {
//     constructor(name,old){
//         this.name = name;
//         this.old = old;
//     }
//     walk(){
//         console.log(`the guy walking in the street his name ${this.name}`)
//     }
// }

// const shishir = new adid ('shishir', 23)
// console.log(shishir)
// shishir.walk()