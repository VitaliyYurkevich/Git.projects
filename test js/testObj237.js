let taxi = { 
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {
        if(this.started) {
            alert(this.make + ' ' + this.model + ' goes zoom zoom!')
        } else {
            alert('You need to start the engine first.')
        }
    }
};
let cadi = {
    make: 'GM',
    model: 'Cadillac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {
        if(this.started) {
            alert(this.make + ' ' + this.model + ' goes zoom zoom!')
        } else {
            alert('You need to start the engine first.')
        }
    }
}
let fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium Blue',
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {
        if(this.started) {
            alert(this.make + ' ' + this.model + ' goes zoom zoom!')
        } else {
            alert('You need to start the engine first.')
        }
    }
}
let chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {
        if(this.started) {
            alert(this.make + ' ' + this.model + ' goes zoom zoom!')
        } else {
            alert('You need to start the engine first.')
        }
    }
}
cadi.start();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();
taxi.start();
taxi.drive();
taxi.stop()
fiat.start();
fiat.drive();
fiat.stop()
