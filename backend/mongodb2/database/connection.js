import mongoose from "mongoose";
import dotenev from "dotenv";

dotenev.config();
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectDB();