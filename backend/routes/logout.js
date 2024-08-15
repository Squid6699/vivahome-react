import express from "express"

export const routerLogout = express.Router();

routerLogout.get("/", async (req, res) => {
    
    try{
        res.clearCookie('sesion', { path: '/' });
        return res.json({success: true});
    }catch(err){
        return res.json({error: "OCURRIO UN ERROR AL CERRAR SESION"})
    }
})