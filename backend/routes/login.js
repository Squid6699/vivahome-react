import express from "express"
import { Usuario } from "../schemas/usuarios.js";


export const routerLogin = express.Router();

routerLogin.post("/login", async (req, res) => {
    const {correo, contrasena} = req.body;

    if (!correo || !contrasena){
        return res.status(400).json({ error: 'FALTAN DATOS' });
    }

    try{
        const usuario = await Usuario.findOne({ correo: correo });
        res.json({usuario: usuario.correo, nivel: usuario.nivel});
    }catch(err){
        return res.status(404).json({error: "CORREO Y/O CONTRASENA INCORRECTOS"})
    }
})