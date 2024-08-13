import express from "express"
import { Usuario } from "../schemas/usuarios.js";
import { SECRET_KEY, EXPIRED } from "../config.js";
import jwt from "jsonwebtoken";

export const routerLogin = express.Router();

routerLogin.post("/login", async (req, res) => {
    const {correo, contrasena} = req.body;

    if (!correo || !contrasena){
        return res.status(400).json({ error: 'FALTAN DATOS' });
    }

    try{
        const usuario = await Usuario.findOne({ correo: correo });

        if (!usuario) {
            return res.json({ error: "CORREO Y/O CONTRASENA INCORRECTOS" });
        }

        const passwordMatch = usuario.contrasena === contrasena;

        if (!passwordMatch) {
            return res.json({ error: "CORREO Y/O CONTRASENA INCORRECTOS" });
        }

        const token = jwt.sign({ usuario: usuario.correo, nivel: usuario.nivel }, SECRET_KEY, {
            expiresIn: EXPIRED,
        });
        res.cookie('sesion', token, { httpOnly: true, secure: false });

        res.json({success: true, usuario: usuario.correo, nivel: usuario.nivel});
    }catch(err){
        return res.json({error: "CORREO Y/O CONTRASENA INCORRECTOS"})
    }
})