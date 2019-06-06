/* Properties */
var count = 0

/* Arrow functions */
const rain = () => Math.random() < 0.25

/* Declaration of a loop do while */
do {
  count++
} while (!rain())

if (count == 1) {
  console.log(`Fui a ver si llovía ${count} vez`)
} else {
  console.log(`Fui a ver si llovía ${count} veces`)
}
