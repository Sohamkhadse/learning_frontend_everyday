// let pattern1 = /\d/
// let pattern2 = /\w/g
// let pattern3 = /\s/
// let pattern4 = /^[Hello]/g
// // let pattern5 = /^{8,10}$/
// let pattern6 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,15}$/;

// let inputString = "12345@Soham"

// console.log(pattern1.test(inputString))
// console.log(pattern2.test(inputString))
// console.log(pattern3.test(inputString))

// console.log(inputString.match(pattern1))

// console.log(inputString.match(pattern4))

// console.log(inputString.match(pattern6))

// let pattern1 = /\w/g
// let string = "hello"

// console.log(pattern1.test(string))
// console.log(string.match(pattern1))

// let pattern = /^[soham]/
// let string = "soham123"
// console.log(string.match(pattern))

let pattern6 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,15}$/;

let string = "Password@123";
console.log(string.match(pattern6))

if (string.match(pattern6)) {
    console.log("password changed successfully");
} else {
    console.log("enter valid new password");
}