import mongoose from "mongoose";


const getMongoUri = () => {
  if (process.env.NODE_ENV === 'production') return process.env.MONGODB_URI;
  if (process.env.NODE_ENV === 'test') return process.env.MONGODB_URI_TEST;
  return process.env.MONGODB_URI_DEV;
};

const connection = {};

export const connectToDatabase = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection")
      return
    }
    const db = await mongoose.connect(getMongoUri())
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    throw new Error("Error connecting to the database")
  }
}
