import express from "express";
import { Cita } from "../schemas/citas.js"
import { Usuario } from "../schemas/usuarios.js";
import { Propiedades } from "../schemas/propiedades.js"

export const routeAgendarCita = express.Router();

routeAgendarCita.post("/", async (req, res) => {
    try {
        const { correoUsuario, idPropiedad , direccion, nombreCompleto, correo, telefono, fecha} = req.body;

        if (!correoUsuario || !idPropiedad || !direccion || !nombreCompleto || !correo || !fecha){
            return res.json({success: false, error: "OCURRIO UN ERROR AL AGENDAR LA CITA"});
        }

        const idPropiedadCorrecta = await Propiedades.findOne({ _id: idPropiedad });

        if (!idPropiedadCorrecta){
            return res.json({success: false, error: "PROPIEDAD NO ENCONTRADO"});
        }

        if (idPropiedadCorrecta.disponible !== "DISPONIBLE"){
            return res.json({success: false, error: "PROPIEDAD NO ENCONTRADO"});
        }

        const idUsuario = await Usuario.findOne({ correo: correoUsuario });
        
        if (!idUsuario){
            return res.json({success: false, error: "USUARIO NO ENCONTRADO"});
        }

        const insertarCita = new Cita({
            nombreCompleto: nombreCompleto,
            correo: correo,
            telefono: telefono,
            fecha: fecha,
            idPropiedad: idPropiedad,
            idComprador: idUsuario
        });
        const citaAgendada = await insertarCita.save();

        if (citaAgendada){
            return res.json({success: true, error: "CITA AGENDADA CON EXITO"});
        }else{
            return res.json({success: false, error: "OCURRIO UN ERROR AL AGENDAR LA CITA"});
        }

    } catch (CastError) {
        return res.json({success: false, error: "OCURRIO UN ERROR AL AGENDAR LA CITA"});
    }
    
})