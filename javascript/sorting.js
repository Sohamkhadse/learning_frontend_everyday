// bubble sort , selection sort

// let numbers = [3, 5, 2, 1, 4, 5, 0, -1, -1]

// let swaped = false
// let step = 0

// for (let i = 0; i < numbers.length - 1; i++) {
//     step++;

//     swaped = false

//     for (let j = 0; j < numbers.length - i - 1; j++) {
//         if (numbers[j] > numbers[j + 1]) {
//             // swap
//             let temp = numbers[j]
//             numbers[j] = numbers[j + 1]
//             numbers[j + 1] = temp

//             swaped = true

//         }
//     }
//     if (!swaped) break
// }

// console.log("sorted array")
// console.log(numbers)
// console.log("total steps : " + step)

// <--------------------------------------------------------------->
// selection sort 

let numbers = [3, 2,1]
let step = 0

for (let i = 0; i < numbers.length - 1; i++) {
    minIndex = i
    step++;
    // swaping 
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[minIndex]) {
            minIndex = j
        }
    }
    // swap
    let temp = numbers[minIndex]
    numbers[minIndex] = numbers[i]
    numbers[i] = temp
}

console.log("sorted array : ")
console.log(numbers)

numbers.sort((a, b) => b - a)

console.log(numbers)
console.log("total steps : " + step)