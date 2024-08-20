import express from "express"
import { Propiedades } from "../schemas/propiedades.js";

export const routeFiltros = express.Router();

routeFiltros.get("/", async (req, res) => {
    const { ubicacion, autos, banos, habitacion, escaleras, metros, tipo, pInicial, pFinal} = req.query;

    try {
        const filtros = {
            ...(ubicacion && { direccion: new RegExp(ubicacion, 'i') }),
            
            ...(autos && { nAutos: autos }),
            
            ...(banos && { nBanos: banos }),
            
            ...(habitacion && { nRecamaras: habitacion }),
            
            ...(escaleras && { nEscaleras: escaleras }),
            
            ...(metros && { metros: metros }),
            
            ...(tipo && { tipo: tipo }),
            
            ...(pInicial && pFinal && { precio: { $gte: pInicial, $lte: pFinal } }),
        };

        const propiedadesFiltradas = await Propiedades.find(filtros);

        if (propiedadesFiltradas){
            return res.json({success: true, propiedades: propiedadesFiltradas});
        }else{
            return res.json({success: false, error: "NO HAY PROPIEDADES DISPONIBLES"})
        }

    } catch (error) {
        return res.json({success: false, error: "NO SE PUDO OBTENER LAS PROPIEDADES"})
    }
          
})