import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://AbleKSaju:Able4621@cluster0.lklxrqg.mongodb.net/deepnetsoft");
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(error);
        console.log(`MongoDb not connected`);
        process.exit(1);
    }
};

export default connectDB;
