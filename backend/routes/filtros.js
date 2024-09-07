import express from "express"
import { Propiedades } from "../schemas/propiedades.js";

export const routeFiltros = express.Router();

routeFiltros.get("/", async (req, res) => {
    const { ubicacion, autos, banos, habitacion, escaleras, metros, tipo, pInicial, pFinal, pagina} = req.query;

    const limit = 48;
    const skip = (pagina - 1) * limit;
    try {
        const filtros = {
            ...(ubicacion.trim && { direccion: new RegExp(ubicacion, 'i') }),
            
            ...(autos && { nAutos: autos }),
            
            ...(banos && { nBanos: banos }),
            
            ...(habitacion && { nRecamaras: habitacion }),
            
            ...(escaleras && { nEscaleras: escaleras }),
            
            ...(metros && { metros: metros }),
            
            ...(tipo && { tipo: tipo }),
            
            ...(pInicial && pFinal && { precio: { $gte: pInicial, $lte: pFinal } }),

            autorizada: true,
        };

        const totalPropiedades = await Propiedades.countDocuments(filtros);

        const totalPaginas = Math.ceil(totalPropiedades / limit);

        const propiedadesFiltradas = await Propiedades.find(filtros).skip(skip).limit(limit);

        if (propiedadesFiltradas.length > 0){
            return res.json({success: true, propiedades: propiedadesFiltradas, paginas: totalPaginas});
        }else{
            return res.json({success: false, error: "NO HAY PROPIEDADES DISPONIBLES"})
        }

    } catch (error) {
        return res.json({success: false, error: "NO SE PUDO OBTENER LAS PROPIEDADES"})
    }
          
})