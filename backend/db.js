import mongoose from "mongoose";

export function connectDB() {
    mongoose.connect('mongodb://127.0.0.1:27017/Vivahome')
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));
}