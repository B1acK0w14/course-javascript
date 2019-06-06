/* Properties */
var david = {
  name: "David",
  lastName: "Penagos",
  age: 28,
  weight: 70.5
}
const INCREMENT_WEIGHT = 0.2

console.log(`Al inicio del año ${david.name} pesa ${david.weight} kilos`)

/* Arrow functions for grow/lower weight */
const growWeight = (person) => {
  person.weight += INCREMENT_WEIGHT
}

const lowerWeight = (person) => {
  person.weight -= INCREMENT_WEIGHT
}

/* Declaration of a loop for */
for (var i = 1; i <= 365; i++) {
  var random = Math.random()
  if (random < 0.25) {
    growWeight(david)
  } else if (random < 0.5) {
    lowerWeight(david)
  }
}

console.log(`Al final del año ${david.name} pesa ${david.weight.toFixed(1)} kilos`)
