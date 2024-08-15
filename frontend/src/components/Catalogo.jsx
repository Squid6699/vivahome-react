import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar.jsx"
import "../css/catalogo.css"
import { useQuery } from "react-query";

function Catalogo(){

    const { data: propiedades, isLoading, refetch } = useQuery("propiedades", obtenerPropiedades);

    useEffect(() => {
        refetch();
    },[refetch]);

    async function obtenerPropiedades() {
        try {
            const response = await fetch("http://localhost:3001/obtenerpropiedades");
            const data = await response.json();

            if (data.success){
                return(data.propiedades);
            }else{
                return [];
            }
        } catch (error) {
            throw new Error("OCURRIO UN ERROR");
        }
    }

    return(
        <>
            <Navbar />
            <section className='container'>
                <div className='catalogo'>
                    {isLoading ? (
                        <p>Cargando propiedades...</p>
                    ) : (
                        propiedades && propiedades.length > 0 ? (
                            propiedades.map((item) => (
                                <div key={item._id} className='card'>
                                    <img src={item.fotoPrincipal} className="card-img-top" alt="Propiedad"></img>
                                    <div className='card-body'>
                                        <h8>{item.direccion}</h8>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No hay propiedades disponibles.</p>
                        )
                    )}
                </div>
            </section>
        </>
    );
}

export default Catalogo;