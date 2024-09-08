import express from "express"
import { Propiedades } from "../schemas/propiedades.js";
import { Usuario } from "../schemas/usuarios.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { SECRET_KEY } from "../config.js";

const app = express();
app.use(cookieParser());

export const routeMisPropiedades = express.Router();

routeMisPropiedades.get("/", async (req, res) => {
    const token = req.cookies.sesion;

    if (!token) {
        return res.json({success: false, error: "ERROR AL OBTENER DATOS DEL USUARIO"})
    }

    jwt.verify(token, SECRET_KEY, async (err, decoded) => {
        if (err) {
            return res.json({errorExpired: "TOKEN EXPIRADO"})
        }
        
        // Extraer el correo del token
        const correo = decoded.correo;

        try {
            if (!correo){
                return res.json({success: false, error: "ERROR AL OBTENER DATOS DEL USUARIO"})
            }
    
            const idUsuario = await Usuario.findOne({correo: correo});
    
            if (!idUsuario){
                return res.json({success: false, error: "ERROR AL OBTENER DATOS DEL USUARIO"})
            }
    
            const propiedades = await Propiedades.find({idUsuario: "ObjectId("+idUsuario._id+")"});
    
            if (propiedades.length > 0){
                return res.json({success: true, propiedades: propiedades});
            }else{
                return res.json({success: false, error: "NO HAY PROPIEDADES DISPONIBLES"})
            }
    
        } catch (error) {
            return res.json({success: false, error: "NO SE PUDO OBTENER LAS PROPIEDADES"})
        }
    });
})
