import cors from "cors"
import express from "express"
import { connectDB } from "./db.js"; 
import { routerLogin } from "./routes/login.js";

const app = express();

app.use(cors());
app.use(express.json()); //MIDDLEWARE

connectDB();

app.use("/auth", routerLogin);

app.listen(3001, () => {
    console.log("Conectado backend");
});