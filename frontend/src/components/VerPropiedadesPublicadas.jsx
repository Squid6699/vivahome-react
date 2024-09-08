import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { HOST } from '../../config';
import { useQuery } from 'react-query';
import "../css/VerPropiedadesPublicadas.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faCar, faEye, faRuler, faStairs } from '@fortawesome/free-solid-svg-icons';

function VerPropiedadesPublicadas({showPropiedades, handleClosePropiedades}){
    const { data: misPropiedades, isLoading, refetch, isRefetching } = useQuery("MisPropiedades", obtenerMisPropiedades);

    useEffect(() => {
        refetch();
    },[refetch]);

    async function obtenerMisPropiedades() {
        try {
            const response = await fetch(`${HOST}mispropiedades`, {
                method: "GET",
                credentials: 'include',
            });
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
            <Modal show={showPropiedades} fullscreen = {true} scrollable = {true} onHide={handleClosePropiedades} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>MIS PROPIEDADES</Modal.Title>
                </Modal.Header>
                <Modal.Body className='containerApp-misPropiedades'>
                    <section className='container-misPropiedades'>
                        {isLoading || isRefetching ? (
                            <span className='textCatalogo-misPropiedades'>CARGANDO PROPIEDADES...</span>
                        ) : (
                        <>
                            {misPropiedades && misPropiedades.length > 0 ? 
                                <div className='catalogo-misPropiedades'>
                                    {misPropiedades.map((item) => (
                                        <div key={item._id} className='card'>
                                            <img src={item.fotoPrincipal} className="card-img-top" alt="Propiedad"></img>
                                            <div className='card-body'>
                                                <h6>{item.direccion}</h6>
                                                <div className="card-text">
                                                    {
                                                        item.tipo !== "Terreno" 
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
                                                                <div>{item.metros}<small>m²</small></div>
                                                            </div>
                                                        </>
                                                            
                                                        :
                                                        <>
                                                            <div className='icon'>
                                                                <div><i><FontAwesomeIcon icon={faRuler}/></i></div>
                                                            </div>
                                                            <div className='text'>
                                                                <div>{item.metros}<small>m²</small></div>
                                                            </div>
                                                        </>
                                                    }
                                                    <div className='tipo'>{item.tipo.toUpperCase()}</div>
                                                    <div className='precio'>${item.precio.$numberDecimal}</div>
                                                </div>
                                            </div>
                                            <div className='card-footer'>
                                                <span><i><FontAwesomeIcon icon={faEye}/></i> VER</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                : 
                                <span className='textCatalogo-misPropiedades'>NO TIENES PROPIEDADES PUBLICADAS.</span>
                            }
                        </>
                        )}
                    </section>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default VerPropiedadesPublicadas;