class vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log('oil er dam barti tai varao barti')
    }
}

class Bus extends vehicle {
    constructor(name, price, seat, ticketprice) {
        super(name, price)
        this.seat = seat;
        this.ticketprice = ticketprice;
    }
}

class Truck extends vehicle {
    constructor(name, price, load) {
        super(name, price)
        this.load = load;
    }
}

const sajid = new Bus('sajid', 3000, 'A2', 2500)
console.log(sajid)

const radim = new Truck('sajid', 4000, 1.5)
console.log(radim)