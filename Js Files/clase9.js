/* Properties */
var x = 4
var y = "4"
const OLDER = 18

var nameOwner = {
  name: "David",
  lastName: "Penagos",
  age: 24,
  chef: false,
  engineer: true
}

/* Function to print a profession when is true */
function printProfession(person) {
  console.log(`${person.name} es:`)
  if (person.engineer) {
    console.log("Ingeniero")
  }
}

/* Function to print a older person (age) when is true */
function printOlderPerson(person) {
  if (olderPerson(person)) {
    console.log(`${person.name} es mayor de edad`)
  }
}

/* Function to print a older person (age) when is true */
function olderPerson(person) {
  return person.age >= OLDER
}
