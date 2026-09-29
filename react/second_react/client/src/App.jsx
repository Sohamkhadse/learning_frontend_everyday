import React, { useState, useEffect } from 'react';
import axios from "axios";

const App = () => {

  let [message, setMessage] = useState("");
  let [user, setUser] = useState({});
  let [student, setStudent] = useState({});
  let [product, setProduct] = useState({});

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

      <h2>User</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <h2>Student</h2>
      <p>Name: {student.name}</p>
      <p>Roll: {student.roll}</p>
      <p>Branch: {student.branch}</p>

      <h2>Product</h2>
      <p>Name: {product.product}</p>
      <p>Price: {product.price}</p>

    </div>
  );
}

export default App;