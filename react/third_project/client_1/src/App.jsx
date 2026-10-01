import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {

    const response = await axios.get(
      "http://localhost:5000/contacts"
    );

    setContacts(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contact = {
      name: name,
      phone: phone,
      address: address
    };

 const response = await axios.post(
    "http://localhost:5000/contacts",
    contact
);

setContacts([...contacts, response.data.contact]);

setName("");
setPhone("");
setAddress("");
  };

  return (
    <div>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>
      <h2>Contacts</h2>

      {contacts.map((contact) => (
        <div key={contact._id}>

          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone}</p>
          <p>Address: {contact.address}</p>

          <hr />

        </div>
      ))}
    </div>
  );
}

export default App;