/* Properties */
var age = 24
var weight = 70.5
var sandwich = 2
var playFootball = 3
var priceWine = 200.3
var pizza = 8
var people = 2

/* Increment a number */
age += 1
weight += sandwich

/* Decrement a number */
age -= 2
weight -= playFootball

/* Multiple a number */
/* To avoid several zeros on console, we do:  */
var total = Math.round(priceWine * 100 * 3) / 100
var totalString = total.toFixed(2)
var total2 = parseFloat(totalString)

/* Divide a number */
var numberOfPizzaByPerson = pizza / people
