let numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (element, index) {
    console.log(element, " at index ", index)
})

// let newArray = numbers.forEach((element, index) => {
//     if (element % 2 == 0) {
//         return element
//     }
// })

let newArray = numbers.map((element, index) => {
    if (element % 2 == 0) {
        return element
    }
})

let newArray1 = numbers.filter((element) => {
    return element % 2 == 0
})

console.log(newArray)
console.log(newArray1)