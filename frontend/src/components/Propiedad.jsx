import React, { useEffect, useState } from 'react'
import "../css/propiedad.css";
import Catalogo from "./Catalogo"
import { Button, Carousel, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useSesion } from '../hook/useSesion';
import { useModal } from "../hook/useModal";
import  Cita  from "../components/Cita";

function Propiedad({showModalPropiedad, handleCloseMOdalPropiedad, propiedad}){
    const {correo} = useSesion();
    const modalCita = useModal();
    const [indexCarrusel, setIndexCarrusel] = useState(0);


    const handleSelect = (selectedIndex) => {
        setIndexCarrusel(selectedIndex);
    };

    const handleOpenModalCitas = () => {
        if (correo){
            modalCita.openModal();
        }

    }

    return(
        <>
            <Catalogo/>

                    <>
                        {
                            
                            <>
                                <Modal show={showModalPropiedad} onHide={handleCloseMOdalPropiedad} size='lg' dialogClassName='modal-dialog-scrollable' backdrop="static" keyboard={false}>
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
                            
                        }
                    </>
                    
                

            
            {modalCita.isOpenModal() && <Cita showModalCita = {modalCita.isOpenModal} handleCloseModalCita = {modalCita.closeModal} propiedad={propiedad}/>}
            
        </>
    );
}

export default Propiedad;