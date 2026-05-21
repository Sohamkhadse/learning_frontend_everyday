//  function greet(name){
//     console.log("hello " + name)
// }

// // ES6

// greet()

// const greet = (name) => {
//     console.log("hello " + name)
// } 

// function greet(name) {
//     console.log("hello " + name)
// }

// function add(n1, n2) {
//     console.log(n1 + n2)
// }

// factorial(5)
// factorial(4)
// factorial(2)
// factorial(9)

// let greet = (name) => {
//     console.log("hello " + name)
// }

// const add = (n1, n2) => {
//     console.log(n1 + n2)
// }

// function factorial(number) {
//     let org_number = number
//     let fact = 1;
//     while (number != 0) {
//         fact = fact * number
//         number--
//     }
//     console.log(`factorial of ${org_number} is ${fact}`)
// }

// greet("soham")
// greet("krish")
// greet("yash")
// greet("raunak")
// greet("manish")

// add(1, 2)
// add(6, 2)
// add(10, 20)
// add(99, 1)

let factorial = (number) => {
    let org_number = number
    let fact = 1;
    while (number != 0) {
        fact = fact * number
        number--
    }
    console.log(`factorial of ${org_number} is ${fact}`)
}

factorial(5)
factorial(4)
factorial(2)
factorial(9)