/* Properties */
var david = {
  name: "David",
  lastName: "Penagos",
  age: 24,
  weight: 70.5
}
const INCREMENT_WEIGHT = 0.3
const GOAL = david.weight - 3
var days = 0

console.log(`Al inicio del año ${david.name} pesa ${david.weight} kilos`)

/* Arrow functions for grow/lower weight */
const growWeight = (person) => {
  person.weight += INCREMENT_WEIGHT
}

const lowerWeight = (person) => {
  person.weight -= INCREMENT_WEIGHT
}

const eatALot = () => Math.random() < 0.3
const doSports = () => Math.random() < 0.4

/* Declaration of a loop while */
while (david.weight > GOAL) {
  if (eatALot()) {
    growWeight(david)
  }
  if (doSports()) {
    lowerWeight(david)
  }
  days += 1
}

// console.log(`Al final del año ${david.name} pesa ${david.weight.toFixed(1)} kilos`)
console.log(`Pasaron ${days} días hasta que ${david.name} adelgazo`)
