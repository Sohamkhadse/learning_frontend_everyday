fetch("https://jsonplaceholder.typicode.com/users/1").then((response)=>{
    return response.json()
}).then((user)=>{
    console.log(user)
}).catch((error)=>{
    console.log(error)
})

// async function loadData(id){
//     try{
//         let result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        
//         let user = await result.json()

//         if(user.name != "Leanne Graham") throw("invalid data !")

//         console.log(user)
        
//     }catch(err){
//         console.log("some error occured: ",err)
//     }
// }

// loadData(1)


