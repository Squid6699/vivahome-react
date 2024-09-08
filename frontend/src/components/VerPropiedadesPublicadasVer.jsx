import { faBath, faBed, faCar, faRuler, faStairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Carousel, Modal } from 'react-bootstrap';
import "../css/verPropiedadesPublicadasVer.css"

function VerPropiedadesPublicadasVer({showVerPropiedadesVer, handleCloseVerPropiedades, propiedad}){
    const [indexCarrusel, setIndexCarrusel] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndexCarrusel(selectedIndex);
    };

    console.log(propiedad);
    return(
        <>
            <Modal show={showVerPropiedadesVer} onHide={handleCloseVerPropiedades} size='xl' backdrop= "static">
                <Modal.Header style={{border: "none"}} closeButton></Modal.Header>
                <Modal.Body>
                    <div className="card mb-3" style={{maxWidth: "1000x"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Carousel activeIndex={indexCarrusel} onSelect={handleSelect}>
                                    {
                                        propiedad.fotos.map((item, index) => (
                                            <Carousel.Item key={index}>
                                                <img src={item.img1} alt="" />
                                            </Carousel.Item>
                                            
                                        ))
                                    }
                                    {
                                        propiedad.fotos.map((item, index) => (
                                            <Carousel.Item key={index}>
                                                <img src={item.img2} alt="" />
                                            </Carousel.Item>
                                            
                                        ))
                                    }
                                </Carousel>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title" style={{marginBottom: "20px", textAlign: "center"}}>{propiedad.direccion}</h5>
                                    <div className="card-text">
                                        {
                                            propiedad.tipo !== "Terreno" 
                                            ?
                                            <>
                                                <div className='icons'>
                                                    <div><i><FontAwesomeIcon icon={faCar}/></i></div>
                                                    <div><i><FontAwesomeIcon icon={faBath}/></i></div>
                                                    <div><i><FontAwesomeIcon icon={faBed}/></i></div>
                                                    <div><i><FontAwesomeIcon icon={faStairs}/></i></div>
                                                    <div><i><FontAwesomeIcon icon={faRuler}/></i></div>
                                                    <div>{propiedad.nAutos}</div>
                                                    <div>{propiedad.nBanos}</div>
                                                    <div>{propiedad.nRecamaras}</div>
                                                    <div>{propiedad.nEscaleras}</div>
                                                    <div>{propiedad.metros}<small>m²</small></div>
                                                </div>
                                            </>
                                                
                                            :
                                            <>
                                                <div className='icon'>
                                                    <div><i><FontAwesomeIcon icon={faRuler}/></i></div>
                                                </div>
                                                <div className='text'>
                                                    <div>{propiedad.metros}<small>m²</small></div>
                                                </div>
                                            </>
                                        }
                                        <div className='tipo'>{propiedad.tipo.toUpperCase()}</div>
                                        <div className='precio'>${propiedad.precio.$numberDecimal}</div>
                                        <div className='descripcion'>{propiedad.descripcion}</div>

                                        <div className='estado'>
                                            <span>ESTADO <br /></span>
                                            {!propiedad.autorizada && <span className='autorizado'>NO AUTORIZADA</span>}
                                            {propiedad.disponible === "DISPONIBLE" && <span className='disponible'>DISPONIBLE</span>}
                                            {propiedad.disponible === "VENDIDA" && <span className='vendida'>VENDIDA</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default VerPropiedadesPublicadasVer;