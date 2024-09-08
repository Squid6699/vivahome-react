import React, { useEffect, useState } from 'react'
import "../css/propiedad.css";
import Catalogo from "./Inicio"
import { Button, Carousel, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useSesion } from '../hook/useSesion';
import { useModal } from "../hook/useModal";
import  Cita  from "../components/Cita";
import { HOST } from '../../config';

function Propiedad(){
    const {correo} = useSesion();
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModalPropiedad, setShowModalPropiedad] = useState(true);
    const modalCita = useModal();
    const { data: propiedad, isLoading, refetch } = useQuery("propiedad", obtenerPropiedad);
    const [indexCarrusel, setIndexCarrusel] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndexCarrusel(selectedIndex);
    };

    const handleOpenModalCitas = () => {
        if (correo){
            modalCita.openModal();
        }
    }

    useEffect(() => {
        refetch();
    },[refetch]);

    async function obtenerPropiedad() {
        try {
            const response = await fetch(`${HOST}propiedad/${id}`);
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
        setShowModalPropiedad(false);
        navigate(`/`);
    }

    return(
        <>
            <Catalogo/>
            {
                isLoading ? (
                    <>
                        <Modal show={showModalPropiedad} onHide={handleClose} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>CARGANDO...</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
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
                                <Modal show={showModalPropiedad} onHide={handleClose} size='lg' dialogClassName='modal-dialog-scrollable' backdrop="static" keyboard={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title><h5>{propiedad.direccion}</h5></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
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
                                        <div className='container' style={{marginTop: "20px", textAlign: "justify"}}>{propiedad.descripcion}</div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        {
                                            correo
                                            ?
                                            <Button className='botonesStyle' onClick={() => handleOpenModalCitas()}>
                                                <FontAwesomeIcon icon={faCalendarDays}/> AGENDAR CITA
                                            </Button>
                                            :
                                            <Button className='botonesStyle'>
                                                <FontAwesomeIcon icon={faCalendarDays}/> INICIA SESION PARA AGENDAR UNA CITA
                                            </Button>
                                        }
                                    </Modal.Footer>
                                </Modal>
                            </>
                            :
                            <>
                                <Modal show={showModalPropiedad} onHide={handleClose} backdrop="static" keyboard={false}>
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
            {modalCita.isOpenModal() && <Cita showModalCita = {modalCita.isOpenModal} handleCloseModalCita = {modalCita.closeModal} propiedad={propiedad}/>}
            
        </>
    );
}

export default Propiedad;