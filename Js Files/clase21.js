/* Declaration of a prototype */
function Person(name, lastname, heigth) {
  this.name = name
  this.lastname = lastname
  this.heigth = heigth
  return this
}

function Developer(name, lastname) {
  this.name = name
  this.lastname = lastname
  return this
}

/* Call for inherit between two objects */
InheritFor(Developer, Person)

function InheritFor(sonPrototype, fatherPrototype) {
  var fn = function () {}
  fn.prototype = fatherPrototype.prototype
  sonPrototype.prototype = new fn
  sonPrototype.prototype.contructor = sonPrototype
}

/* Declaration of a function for the prototype */
Person.prototype.sayHi = function () {
  console.log(`Hola, me llamo ${this.name} ${this.lastname}`)
}

Person.prototype.isTall = function () {
    return this.heigth > 1.8
}

Developer.prototype.sayHi = function () {
  console.log(`Hola, me llamo ${this.name} ${this.lastname} y soy desarrollador`)
}

var david = new Person("David", "Penagos", 1.73)
david.sayHi()
