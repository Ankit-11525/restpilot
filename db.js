import mongoose from "mongoose";
import { NextResponse } from "next/server";

const connect = async () => {
    const URL=process.env.DATABASE_URL;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongo connection successful");
    } catch (error) {
        throw new Error("Error in connecting to MongoDB");
    }
}

export default connect;
