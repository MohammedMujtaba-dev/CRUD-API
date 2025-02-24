import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Successfully connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    console.log(`Count not Connect ${conn.connection.host}`);
  }
};

export default ConnectDB;
