import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MongoDB connected ! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDB connection FAILED: ", error);
        process.exit(1);    // exits the process/code-execution immediately 
    }
}

export default connectDB;