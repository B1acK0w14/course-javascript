/* Create a class with the functions inside him */
class Person {
    constructor(name, lastname, height) {
        this.name = name
        this.lastname = lastname
        this.height = height
    }

    sayHi(respondGreeting) {
        console.log(`Hola, me llamo ${this.name} ${this.lastname}`)
        if (respondGreeting) {
            respondGreeting(this.name, this.lastname)
        }
    }

    isTall() {
        return this.height > 1.8
    }
}

/* Create a class that inherit from other */
class Developer extends Person {
    constructor(name, lastname, height) {
        /* Require allways a super as a constructor */
        super(name, lastname, height)
    }

    sayHi(respondGreeting) {
        console.log(`Hola, me llamo ${this.name} ${this.lastname} y soy desarrollador`)
        if (respondGreeting) {
            respondGreeting(this.name, this.lastname, true)
        }
    }
}

function respondGreeting(name, lastname, isDev) {
    console.log(`Buen día ${name} ${lastname}`)
    if (isDev) {
        console.log(`Ah míra, no sabía que eras desarrollador/a`)
    }
}

var david = new Developer("David", "Penagos", 1.73)
david.sayHi(respondGreeting)