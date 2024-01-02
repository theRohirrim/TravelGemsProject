import mongoose from "mongoose";


const getMongoUri = () => {
  if (process.env.NODE_ENV === 'production') return process.env.MONGODB_URI;
  if (process.env.NODE_ENV === 'test') return process.env.MONGODB_URI_TEST;
  return process.env.MONGODB_URI_DEV;
};

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(getMongoUri(), {})
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log(error)
    throw new Error("Error connecting to the database: ", error)
  }
}
