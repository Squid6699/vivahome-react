import cors from "cors"
import express from "express"
import { connectDB } from "./db.js"; 
import { routerLogin } from "./routes/login.js";
import { routerRegister } from "./routes/register.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',  // Reemplaza con la URL de tu frontend
    credentials: true                 // Permite las credenciales
}));

app.use(express.json()); //MIDDLEWARE
app.use(cookieParser());

connectDB();

app.use("/auth", routerLogin);
app.use("/auth", routerRegister);

app.listen(3001, () => {
    console.log("Conectado backend");
});