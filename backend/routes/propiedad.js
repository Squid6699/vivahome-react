import express from "express"
import { Propiedades } from "../schemas/propiedades.js";

export const routePropiedad = express.Router();

routePropiedad.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const propiedad = await Propiedades.findOne({ _id: id });

        if (propiedad){
            return res.json({success: true, propiedad: propiedad});
        }else{
            return res.json({success: false, error: "NO HAY PROPIEDADES DISPONIBLES"})
        }

    } catch (error) {
        return res.json({success: false, error: "NO SE PUDO OBTENER LAS PROPIEDADES"})
    }
})