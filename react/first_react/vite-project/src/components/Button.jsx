import React from 'react'
import {useState} from "react"

const Button = ()=>{

    let [age,setAge]= useState(25)
    let name ="soham"

    const increaseAge = () => {
        setAge((prev)=>{return prev + 1})
        console.log(age)
    }


    return(
        //rendering
        <div>
              <h1 className="text-blue-450 text-4xl font-black underline">
                hello i am {name}
              </h1>

              {
                age>23 ? <h3 className="text-3xl font-black">{age}</h3>:null
              }
              <button onClick={increaseAge}  className="bg-red-500 text-white font-bold p-2rounded hover:bg-red-200 transition">
                increase Age
              </button>
        </div>

            )
}

export default Button 