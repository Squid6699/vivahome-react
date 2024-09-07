import cors from "cors"
import express from "express"
import { connectDB } from "./db.js"; 
import cookieParser from "cookie-parser";
import { HOST, SECRET_KEY } from "./config.js";
import jwt from "jsonwebtoken";

import { routerLogin } from "./routes/login.js";
import { routerRegister } from "./routes/register.js";
import { routerObtenerPropiedades } from "./routes/obtenerPropiedades.js";
import { routerLogout } from "./routes/logout.js";
import { routePropiedad } from "./routes/propiedad.js";
import { routeAgendarCita } from "./routes/agendarCita.js";
import { routeFiltros } from "./routes/filtros.js";
import { routePropiedadesPublicadas } from "./routes/verPropiedadesPublicadas.js";
import { routeMisPropiedades } from "./routes/misPropiedades.js";

const app = express();

app.use(cors({
    origin: HOST,  // Reemplaza con la URL de tu frontend
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
app.use("/obtenerpropiedades", routerObtenerPropiedades);
app.use("/logout", routerLogout);
app.use("/propiedad", routePropiedad);
app.use("/agendarcita", routeAgendarCita);
app.use("/filtrarpropiedades", routeFiltros);
app.use("/propiedadespublicadas", routePropiedadesPublicadas);
app.use("/mispropiedades", routeMisPropiedades);


app.listen(3001, () => {
    console.log("Conectado backend");
});