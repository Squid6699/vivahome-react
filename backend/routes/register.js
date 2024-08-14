import express from "express"
import { Usuario } from "../schemas/usuarios.js";
import { SECRET_KEY, EXPIRED } from "../config.js";
import jwt from "jsonwebtoken";

export const routerRegister = express.Router();

routerRegister.post("/register", async (req, res) => {
    const {nombreCompleto, correo, contrasena, telefono} = req.body;

    if (!nombreCompleto || !correo || !contrasena){
        return res.status(400).json({ error: 'FALTAN DATOS' });
    }

    try{
        const insertarUsuario = new Usuario({
            nombreCompleto: nombreCompleto,
            correo: correo,
            contrasena: contrasena,
            telefono: telefono
        });
        const registrado = await insertarUsuario.save();
        
        if (registrado){
            const token = jwt.sign({ usuario: registrado.nombreCompleto, correo: registrado.correo, nivel: registrado.nivel }, SECRET_KEY, {
                expiresIn: EXPIRED,
            });
            res.cookie('sesion', token, { httpOnly: true, secure: false });
    
            res.json({success: true, usuario: registrado.nombreCompleto, correo: registrado.correo, nivel: registrado.nivel});
        }else{
            return res.json({error: "OCURRIO UN ERROR AL REGISTRARSE"})
        }
    }catch(err){
        return res.json({error: "OCURRIO UN ERROR AL REGISTRARSE"})
    }
})