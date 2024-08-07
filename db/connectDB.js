import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}${process.env.DB_NAME}`);
    console.log(`Connected to ==> ${process.env.MONGO_URL}${process.env.DB_NAME} successfully`);
  } catch (error) {
    console.log(`Error connecting to db`, error.message);
  }
};

export default connectDB;
