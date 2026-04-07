import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB conectado");
  } catch (error: any) {
    console.log("Unable to connect to your DB", error.message);
    process.exit(1);
  }
};
