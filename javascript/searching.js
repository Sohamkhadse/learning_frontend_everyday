               // <--------------------------// linear search----------------------------->


// let simplearray = [2,5,1,9,7,22]
// let searchvalue = 22
// let position = 0
// let flag = false
// let steps =  0

// for(let i = 0; i < simplearray.length; i++){
//     steps++
//     if(simplearray[i] == searchvalue){
//         position = i + 1
//         flag = true
//         break;
//     }
// }

// if(flag){
//     console.log(`we found element ${searchvalue} at position ${position} !`)
//     console.log(`in ${steps} steps`)
// }else{
//     console.log(`unable to find the element ${searchvalue} in array !`)
//     console.log(`in ${steps} steps`)
// }



// <---------------------------------------------bimary search------------------------------------>

let simplearray = [100,200,300,400,500,600,700,800,900,1000]
let searchvalue =400
let flag = false
let lb = 0
let ub = simplearray.length -1
let position = 0
let steps = 0
let midpoint;

while(lb<ub){
    steps++
    midpoint = Math.ceil((lb+ub)/2)

    if(simplearray[midpoint]==searchvalue){
        flag = true
        position = midpoint + 1
        break;
    }
    
    if(simplearray[midpoint]<searchvalue){
        lb = midpoint + 1
    }else{
        ub = midpoint - 1
    }

}

if(flag){
    console.log(`we found element ${searchvalue} at position ${position} !`)
    console.log(`in ${steps} steps`)
}else{
    console.log(`unable to find the element ${searchvalue} in array !`)
    console.log(`in ${steps} steps`)
}
