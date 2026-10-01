import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Contact from "./models/contact.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    });
});

app.post("/contacts", async (req, res) => {

    const { name, phone, address } = req.body;

    const contact = new Contact({
        name: name,
        phone: phone,
        address: address
    });

    await contact.save();

    res.status(201).json({
        message: "Contact saved successfully",
        contact: contact
    });
});

app.get("/contacts", async (req, res) => {

    const contacts = await Contact.find();

    res.status(200).json(contacts);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});