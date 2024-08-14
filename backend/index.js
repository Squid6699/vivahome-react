import cors from "cors"
import express from "express"
import { connectDB } from "./db.js"; 
import { routerLogin } from "./routes/login.js";
import { routerRegister } from "./routes/register.js";
import cookieParser from "cookie-parser";
import { SECRET_KEY } from "./config.js";
import jwt from "jsonwebtoken";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',  // Reemplaza con la URL de tu frontend
    credentials: true                 // Permite las credenciales
}));

app.use(express.json()); //MIDDLEWARE
app.use(cookieParser());

connectDB();

app.post("/", (req, res) => {
    const token = req.cookies.sesion;

    if (!token) {
        return res.json({error: "TOKEN INVALIDO"})
    }
    
    try {
        const verified = jwt.verify(token, SECRET_KEY);
        return res.json({usuario: verified.usuario, correo: verified.correo, nivel: verified.nivel});

    } catch (error) {
        return res.json({errorExpired: "TOKEN EXPIRADO"})
    }
})

app.use("/auth", routerLogin);
app.use("/auth", routerRegister);

app.listen(3001, () => {
    console.log("Conectado backend");
});