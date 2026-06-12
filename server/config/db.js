import mongoose from "mongoose";

const connectDB = async () => {
    console.log("connectDB function called");

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000 // 👈 ADD THIS
        });

        console.log("MongoDB connected:", conn.connection.host);
    } catch (error) {
        console.error("DB ERROR:", error.message);
    }
};

export default connectDB;