//if we think there is a error in the code then we can use this [try and catch ] to avoid those error. 
let num1 = 2
let num2 = 0

try{
    let division = num1/num2
    throw("error")
    console.log(division)
}catch(err){
console.log("error")
}finally{
    console.log("code is completed")
}

//it is error handling cause it gives us proper error
try{
    console.log(a)
}catch(err){
    console.log(err)
}finally{
    console.log("program is completed")
}