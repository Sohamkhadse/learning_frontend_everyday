// let age = 20

// if (age > 18) {
//     console.log("you can drive")
// }else{
//     console.log("you cannot drive")
// }

// let age = 19
// let helmet = true
// let license = true
// let vehical = true
// let male = true

// if(age > 18){
//     if (helmet){
//         if(license){
//             if(vehical){
//                 if(male){
//                      console.log("you can drive")
//                 }else{
//                      console.log("you cannot drive")
//                 }
//             }else{
//                  console.log("you cannot drive")
//             }
//         }else{
//              console.log("you cannot drive")
//         }
//     }else{
//         console.log("you cannot drive")
//     }
// }else{
//     console.log("you cannot drive")
// }

// let a = 81
// let b = 68
// let c = 76
// let d = 45
// let e = 240

// if (a > b) {
//     if (a > c) {
//         if (a > d) {
//             if (a > e) {
//                 console.log("a is greater of 5 numbers ")
//             } else {
//                 console.log("e is greater of 5 numbers ")
//             }
//         } else {
//             if (d > e) {
//                 console.log("d is greater of 5 numbers ")
//             } else {
//                 console.log("e is greater of 5 numbers ")
//             }
//         }
//     } else if (c > d) {
//         if (c > e) {
//             console.log("c is greater of 5 numbers ")
//         } else {
//             console.log("e is greater of 5 numbers ")
//         }
//     } else {
//         if (d > e) {
//             console.log("d is greater of 5 numbers ")
//         } else {
//             console.log("e is greater of 5 numbers ")
//         }
//     }
// } else if (b > c) {
//     if (b > d) {
//         if (b > e) {
//             console.log("b is greater of 5 numbers")
//         } else {
//             console.log("e is greater of 5 numbers ")
//         }
//     } else {
//         if (d > e) {
//             console.log("d is greater of 5 numbers ")
//         } else {
//             console.log("e is greater of 5 numbers ")
//         }
//     }
// } else if (c > d) {
//     if (c > e) {
//         console.log("c is greater of 5 numbers ")
//     } else {
//         console.log("e is greater of 5 numbers ")
//     }
// } else {
//     if (d > e) {
//         console.log("d is greater of 5 numbers ")
//     } else {
//         console.log("e is greater of 5 numbers ")
//     }
// }

// let carA = 800000
// let carB = 1200000
// let carC = 950000

// if (carA > carB) {
//     if (carA > carC) {
//         console.log("Car A is the most expensive")
//     } else {
//         console.log("Car C is the most expensive")
//     }
// } else {
//     if (carB > carC) {
//         console.log("Car B is the most expensive")
//     } else {
//         console.log("Car C is the most expensive")
//     }
// }

let marks = 72
let attendance = 80

if (marks >= 50) {
    if (attendance >= 75) {
        console.log("Pass")
    } else {
        console.log("Fail due to low attendance")
    }
} else {
    if (attendance >= 75) {
        console.log("Fail due to low marks")
    } else {
        console.log("Fail in both")
    }
}