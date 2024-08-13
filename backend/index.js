import cors from "cors"
import express from "express"
import { connectDB } from "./db.js"; 
import { routerLogin } from "./routes/login.js";
import { routerRegister } from "./routes/register.js";

const app = express();

app.use(cors());
app.use(express.json()); //MIDDLEWARE

connectDB();

app.use("/auth", routerLogin);
app.use("/auth", routerRegister);

app.listen(3001, () => {
    console.log("Conectado backend");
});