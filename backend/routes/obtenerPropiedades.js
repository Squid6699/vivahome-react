import express from "express"
import { Propiedades } from "../schemas/propiedades.js";

export const routerObtenerPropiedades = express.Router();

routerObtenerPropiedades.get("/", async (req, res) => {

    try {
        const propiedades = await Propiedades.find({ autorizada: true });

        if (propiedades.length > 0){
            return res.json({success: true, propiedades: propiedades});
        }else{
            return res.json({success: false, error: "NO HAY PROPIEDADES DISPONIBLES"})
        }

    } catch (error) {
        return res.json({success: false, error: "NO SE PUDO OBTENER LAS PROPIEDADES"})
    }
})