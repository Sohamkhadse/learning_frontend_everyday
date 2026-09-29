import react , { useState, useEffect } from 'react';
import axios from "axios";
import { use } from 'react';

const App = () => {
  let [message, setMessage] = useState("")
  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){
    try{
      let result = await axios({
        method: "GET",
        url: "http://localhost:3011/data"
      })

      console.log(result)
      setMessage(result.data.message)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Message from server: {message}</h1>
    </div>
  )
}



export default App;