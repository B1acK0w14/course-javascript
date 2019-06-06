/* Properties */
var david = {
  name: "David",
  lastName: "Penagos",
  height: 1.99,
  countBooks: 100
}

var paula = {
  name: "Paula",
  lastName: "Rodriguez",
  height: 1.63,
  countBooks: 68
}

var maria = {
  name: "Maria",
  lastName: "Velez",
  height: 1.55,
  countBooks: 112
}

var count = 0

/* Arrow functions */
const isTall = (person) => person.height > 1.8
const isSmall = (person) => person.height < 1.8
const toCentimeters = (person) => ({
    ...person,
    height: person.height * 100
})
const reducer = (count, person) => count + person.countBooks

/* Declaration of an array */
var arrayPerson = [david, paula, maria]

for (var i = 0; i < arrayPerson.length; i++) {
  console.log(`${arrayPerson[i].name} mide ${arrayPerson[i].height}`)
}

/* Declaration of filtering an array */
var tallPersons = arrayPerson.filter(isTall)
var smallPersons = arrayPerson.filter(isSmall)

/* Declaration of mapping an array */
var cmsPersons = arrayPerson.map(toCentimeters)

/* Declaration of reduce items an array */
var totalBooks = arrayPerson.reduce(reducer, count)

console.log(tallPersons)
console.log(smallPersons)
console.log(cmsPersons)
console.log(`En total todos tiene ${totalBooks} libros`)
