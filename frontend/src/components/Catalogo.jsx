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
                {isLoading ? (
                    <span>CARGANDO PROPIEDADES...</span>
                ) : (
                <>
                    {propiedades && propiedades.length > 0 ? (
                        <div className='catalogo'>
                            {propiedades.map((item) => (
                                <div key={item._id} className='card'>
                                    <img src={item.fotoPrincipal} className="card-img-top" alt="Propiedad"></img>
                                    <div className='card-body'>
                                        <h6>{item.direccion}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <span>NO HAY PROPIEDADES DISPONIBLES.</span>
                    )}
                </>
                )}
            </section>
        </>
    );
}

export default Catalogo;