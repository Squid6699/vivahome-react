import React from 'react'
import "../css/catalogo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBath, faBed, faStairs, faRuler, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Catalogo({isLoading, propiedades, isRefetching}){
    
    return(
        <>
            <section className='container-catalogo'>
                {isLoading || isRefetching ? (
                    <span className='textCatalogo'>CARGANDO PROPIEDADES...</span>
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
                                        <Link to={"/propiedad/"+item._id} style={{cursor: "pointer"}}>
                                            <span><i><FontAwesomeIcon icon={faEye}/></i> VER</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        : 
                        <span className='textCatalogo'>NO HAY PROPIEDADES DISPONIBLES.</span>
                    }
                </>
                )}
            </section>
        </>
    );
}

export default Catalogo;