import React, { useState, useEffect } from 'react';
import axios from "axios";

const App = () => {

  let [message, setMessage] = useState("");
  let [user, setUser] = useState({});
  let [student, setStudent] = useState({});
  let [product, setProduct] = useState({});

  let [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

    const handleChange = (e) => {
    let { name, value } = e.target
    setFormData((prev) => { return { ...prev, [name]: value } })
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formData)

      let result = await axios({
        method: "POST",
        url: "http://localhost:3011/data",
        data: formData
      })

      console.log(result)
      alert(result.data.message)

    } catch (err) {
      console.error("failed to send data : ", err)
      alert("failed to send data !")
    }
  }

  useEffect(() => {
    fetchData();
    fetchUser();
    fetchStudent();
    fetchProduct();
  }, []);

  async function fetchData() {
    try {
      let result = await axios({
        method: "GET",
        url: "http://localhost:3011/data"
      });

      console.log(result);
      setMessage(result.data.message);

    } catch (err) {
      console.log(err);
    }
  }

  async function fetchUser() {
    try {
      let result = await axios({
        method: "GET",
        url: "http://localhost:3011/user"
      });

      console.log(result);
      setUser(result.data);

    } catch (err) {
      console.log(err);
    }
  }

  async function fetchStudent() {
    try {
      let result = await axios({
        method: "GET",
        url: "http://localhost:3011/student"
      });

      console.log(result);
      setStudent(result.data);

    } catch (err) {
      console.log(err);
    }
  }

  async function fetchProduct() {
    try {
      let result = await axios({
        method: "GET",
        url: "http://localhost:3011/product"
      });

      console.log(result);
      setProduct(result.data);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>

      <h1>Message: {message}</h1>

       <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={formData.name} type="text" name="name" id="" />
        <input onChange={handleChange} value={formData.phone} type="tel" name="phone" id="" />
        <input onChange={handleChange} value={formData.email} type="email" name="email" id="" />
        <button type='submit'>submit</button>
      </form>


    </div>
  );
}

export default App;