import React, { useEffect, useState } from 'react'
import "../css/propiedad.css";
import Catalogo from "./Catalogo"
import { Button, Carousel, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useSesion } from '../hook/useSesion';

function Propiedad(){
    const {correo} = useSesion();
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModalPropiedades, setShowModalPropiedades] = useState(true);
    const { data: propiedad, isLoading, refetch } = useQuery("propiedad", obtenerPropiedad);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const handleOpenModalCitas = () => {
        if (correo){
            
        }
    }

    const handleCloseModalCitas = () => {

    }

    useEffect(() => {
        refetch();
    },[refetch]);

    async function obtenerPropiedad() {
        try {
            const response = await fetch(`http://localhost:3001/propiedad/${id}`);
            const data = await response.json();

            if (data.success){
                return(data.propiedad);
            }else{
                return [];
            }
        } catch (error) {
            throw new Error("OCURRIO UN ERROR");
        }
    }

    const handleClose = () => {
        setShowModalPropiedades(false);
        navigate(`/`);
    }

    return(
        <>
            <Catalogo/>
            {
                isLoading ? (
                    <>
                        <Modal show={showModalPropiedades} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>CARGANDO...</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    CERRAR
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                ) : (
                    <>
                        {
                            propiedad ?
                            <>
                                <Modal show={showModalPropiedades} onHide={handleClose} size='lg' dialogClassName='modal-dialog-scrollable'>
                                    <Modal.Header closeButton>
                                        <Modal.Title><h5>{propiedad.direccion}</h5></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Carousel activeIndex={index} onSelect={handleSelect}>
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
                                        <div className='container'>{propiedad.descripcion}</div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className='botonesStyle'>
                                            <FontAwesomeIcon icon={faCalendarDays}/> AGENDAR CITA
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                            :
                            <>
                                <Modal show={showModalPropiedades} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className='fs-5'>SIN INFORMACION</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        OCURRIO UN ERROR!!
                                    </Modal.Body>
                                </Modal>
                            </>
                        }
                    </>
                    
                )

            }



            
        </>
    );
}

export default Propiedad;