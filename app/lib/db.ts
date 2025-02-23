import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};


// mongodb+srv://<db_username>:<db_password>@cluster0.b6qtdz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0