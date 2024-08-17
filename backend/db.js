import mongoose from "mongoose";
import { DB, HOST_DB, PUERTO_DB } from "./config.js";

export function connectDB() {
    mongoose.connect(HOST_DB+':'+PUERTO_DB+'/'+DB)
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));
}