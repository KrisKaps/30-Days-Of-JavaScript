

// Checking Data Types

// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object



// Changing Data Types (Casting)

/*
String to Int
We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

parseInt()
Number()
Plus sign(+)

*/

let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10

let num2 = '10'
let numInt2 = Number(num2)
console.log(numInt2) // 10

let num3 = '10'
let numInt3 = +num3
console.log(numInt3) // 10


/*
Float to Int
We can convert float numbers to integers. We use the following method to convert float to int:
parseInt()
*/

let num4 = 9.81
let numInt4 = parseInt(num4)
console.log(numInt4) // 9