/* Properties */
/* Init for an object with properties inside */
var nameOwner = {
  name: "David",
  lastName: "Penagos",
  age: 24
}

var nameOther = {
  name: "Fernando",
  lastName: "Gaviria",
  age: 44
}

/* Function for capitalize */
function printNameCapitalLetter(person) {
  console.log(person.name.toUpperCase())
}

printNameCapitalLetter(nameOwner)
printNameCapitalLetter(nameOther)

/* Function for print name and age */
function printNameAndAge(person) {
  console.log(`Hola, me llamo ${person.name.toUpperCase()} y tengo ${person.age} años`)
}

printNameAndAge(nameOwner)
printNameAndAge(nameOther)

/* Function for birthday */
function birthday (person) {
  /* Return the same value but, not modify the original */
  return {
    ...person,
    age: person.age + 1
  }
}
