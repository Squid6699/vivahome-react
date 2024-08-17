import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBath, faBed, faStairs, faRuler, faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../components/Navbar.jsx"
import "../css/catalogo.css"
import { useQuery } from "react-query";
import { useModal } from '../hook/useModal.js';
import Propiedad from './Propiedad.jsx';

function Catalogo(){

    const { data: propiedades, isLoading, refetch } = useQuery("propiedades", obtenerPropiedades);
    const modalPropiedad = useModal();
    const [propiedad, setPropiedad] = useState([]);

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

    const handleVerPropiedad = (propiedad) => {
        setPropiedad(propiedad);
        modalPropiedad.openModal();
    }

    return(
        <>
            <Navbar />
            <section className='container'>
                {isLoading ? (
                    <span>CARGANDO PROPIEDADES...</span>
                ) : (
                <>
                    {propiedades && propiedades.length > 0 ? 
                        <div className='catalogo'>
                            {propiedades.map((item) => (
                                <div key={item._id} className='card'>
                                    <img src={item.fotoPrincipal} className="card-img-top" alt="Propiedad"></img>
                                    <div className='card-body'>
                                        <h6>{item.direccion}</h6>
                                        <div className="card-text">
                                            {
                                                item.tipo === "Venta" 
                                                ?
                                                <>
                                                    <div className='icons'>
                                                        <div><i><FontAwesomeIcon icon={faCar}/></i></div>
                                                        <div><i><FontAwesomeIcon icon={faBath}/></i></div>
                                                        <div><i><FontAwesomeIcon icon={faBed}/></i></div>
                                                        <div><i><FontAwesomeIcon icon={faStairs}/></i></div>
                                                        <div><i><FontAwesomeIcon icon={faRuler}/></i></div>
                                                        <div>{item.nAutos}</div>
                                                        <div>{item.nBanos}</div>
                                                        <div>{item.nRecamaras}</div>
                                                        <div>{item.nEscaleras}</div>
                                                        <div>{item.metros}</div>
                                                    </div>
                                                </>
                                                    
                                                :

                                                <>
                                                    <div className='icon'>
                                                        <div><i><FontAwesomeIcon icon={faRuler}/></i></div>
                                                    </div>
                                                    <div className='text'>
                                                        <div>{item.metros}</div>
                                                    </div>
                                                </>
                                            }
                                            <div className='tipo'>{item.tipo.toUpperCase()}</div>
                                            <div className='precio'>${item.precio.$numberDecimal}</div>
                                        </div>
                                    </div>
                                    <div className='card-footer'>
                                        <span style={{cursor: "pointer"}} onClick={() => handleVerPropiedad(item)}><i><FontAwesomeIcon icon={faEye}/></i> VER</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        : 
                        <span>NO HAY PROPIEDADES DISPONIBLES.</span>
                    }
                </>
                )}
            </section>
            {modalPropiedad.isOpenModal() && <Propiedad showModalPropiedad={modalPropiedad.openModal} handleCloseMOdalPropiedad={modalPropiedad.closeModal()} propiedad={propiedad}/>}
        </>
    );
}

export default Catalogo;