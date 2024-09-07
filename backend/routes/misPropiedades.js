import express from "express"
import { Propiedades } from "../schemas/propiedades.js";
import { Usuario } from "../schemas/usuarios.js";

export const routeMisPropiedades = express.Router();

routeMisPropiedades.post("/", async (req, res) => {
    const { correo } = req.body;

    try {
        if (!correo){
            return res.json({success: false, error: "ERROR AL OBTENER DATOS DEL USUARIO"})
        }

        const idUsuario = await Usuario.findOne({correo: correo});

        if (!idUsuario){
            return res.json({success: false, error: "ERROR AL OBTENER DATOS DEL USUARIO"})
        }

        const propiedades = await Propiedades.find({idUsuario: "ObjectId("+idUsuario._id+")"});

        return res.json({propiedades})
    } catch (error) {
        
    }
})
