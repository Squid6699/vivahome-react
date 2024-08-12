import cors from "cors"
import express from "express"
import { connectDB } from "./db.js"; 

const app = express();

app.use(cors());
app.use(express.json()); //MIDDLEWARE

connectDB()

app.listen(3001, () => {
    console.log("Conectado backend");
});