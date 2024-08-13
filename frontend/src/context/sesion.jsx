import { createContext, useState } from "react";

export const SesionContext = createContext();

export function SesionProvider({children}){
    const [usuario, setUsuario] = useState(null);
    const [nivel, setNivel] = useState(null);

    return(
        <SesionContext.Provider value={{
            usuario,
            setUsuario,
            nivel,
            setNivel
        }}>{children}</SesionContext.Provider>
    );
}