import { createContext, useState } from "react";

export const SesionContext = createContext();

export function SesionProvider({children}){
    const [usuario, setUsuario] = useState();
    const [nivel, setNivel] = useState();

    return(
        <SesionContext.Provider value={{
            usuario,
            setUsuario,
            nivel,
            setNivel
        }}>{children}</SesionContext.Provider>
    );
}