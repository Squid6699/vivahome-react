import { createContext, useEffect, useState } from "react";
import { HOST } from "../../config";

export const SesionContext = createContext();

export function SesionProvider({children}){
    const [usuario, setUsuario] = useState(null);
    const [correo, setCorreo] = useState(null)
    const [nivel, setNivel] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(HOST, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                })

                const data = await response.json();

                if (data.errorExpired){
                    //HACER PARA QUE SE REFRESQUE EL TOKEN

                }

                if (response.ok){
                    setUsuario(data.usuario);
                    setCorreo(data.correo);
                    setNivel(data.nivel);
                }

            } catch (error) {}
        };
        fetchData();
    }, []);

    return(
        <SesionContext.Provider value={{
            usuario,
            setUsuario,
            correo,
            setCorreo,
            nivel,
            setNivel
        }}>{children}</SesionContext.Provider>
    );
}