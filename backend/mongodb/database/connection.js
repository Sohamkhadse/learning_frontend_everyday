import mongosee from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    await mongosee.connect(process.env.MONGODB_CONNECTION_STRING)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectDB();