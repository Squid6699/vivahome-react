import express from "express"
import { Usuario } from "../schemas/usuarios.js";


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
        await insertarUsuario.save();
        return res.status(201).json({ message: "USUARIO REGISTRADO CON EXITO" });
    }catch(err){
        return res.status(404).json({error: "OCURRIO UN ERROR AL REGISTRARSE"})
    }
})