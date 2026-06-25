// <----------------------------------promise-------------------------------------->
// A Promise is an object that represents a value that will be available later.
// means it holds the value to be used lateron

// Think of it like ordering food online:

// Pending → Food is being prepared.
// Resolved (Fulfilled) → Food is delivered.
// Rejected → Order is canceled.

//           Promise
//              |
//       ----------------
//       |              |
//    resolve()      reject()
//       |              |
//  Fulfilled       Rejected
//       |              |
//     then()        catch()

// resolve() → go to .then()
// reject() → go to .catch()

// <---------------syntax---------------------->
// let myPromise = new Promise((resolve, reject) => {
//     // some work

//     resolve("Success"); // if work succeeds
//     // reject("Failed"); // if work fails
// });


let myPromise = new Promise((resolve, reject) => {
    resolve("Data received");
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// let myPromise = new Promise((resolve,reject)=>{
//     let data = 100;
//     setTimeout(()=>{
//         if (data<100){
//             reject("data value is less!")
//         }else{
//             resolve("data value is correct")
//         }
//     },5000)
// })

// myPromise.then((resolve)=>{
//     console.log("promise resolved")
//     console.log(resolve)
// }).catch((error)=>{
//     console.log(error)
// })


// function promise1(){
//     return new Promise((resolve,reject)=>{
//     let data = 10;
//     setTimeout(()=>{
//       if(data < 100){
//         reject("data value is less !")
//       }else{
//         resolve("data value is correct !")
//       }
//     },5000)
//   })
// }

// async function runPromise(){
//   try{
//    await promise1()
//   }catch(err){
//     console.log("some error/exception occured !")
//     console.log(err)
//   }
// }

// runPromise()

