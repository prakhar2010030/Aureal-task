import mongoose from "mongoose"
import { dbName } from "../src/constant.js";


const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${dbName}`)
        console.log(`database is connected with host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`database connection failed with error ${error}`);
        process.exit(1);
    }
}

export default connectDb;