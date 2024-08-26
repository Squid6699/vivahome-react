import express from "express";
import { Usuario } from "../schemas/usuarios.js";
import { Propiedades } from "../schemas/propiedades.js";

export const routePropiedadesPublicadas = express.Router();

routePropiedadesPublicadas.post("/", async (req, res) => {
    try {
        const { correo } = req.body;

        if (!correo) {
            return res.json({success: false, error: "OCURRIO UN ERROR AL OBTENER DATOS DEL USUARIO"});
        }

        const idUsuario = await Usuario.findOne({correo: correo});

        if (!idUsuario) {
            return res.json({success: false, error: "OCURRIO UN ERROR AL OBTENER DATOS DEL USUARIO"});
        }

        const propiedades = await Propiedades.find({idUsuario: idUsuario._id});

        if (propiedades.length > 0){
            return res.json({success: true, propiedades: propiedades});
        }else{
            return res.json({success: false, error: "SIN PROPIEDADES PUBLICADAS"});
        }


    } catch (error) {
        return res.json({success: false, error: "OCURRIO UN ERROR AL INTENTAR RESOLVER SU SOLICITUD"});
    }
    
})