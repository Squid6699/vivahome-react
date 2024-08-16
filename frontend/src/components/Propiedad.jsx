import React, { useEffect, useState } from 'react'
import "../css/propiedad.css";
import Catalogo from "./Catalogo"
import { Button, Card, Carousel, Modal, Placeholder } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from "react-query";

function Propiedad(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModalPropiedades, setShowModalPropiedades] = useState(true);
    const { data: propiedad, isLoading, refetch } = useQuery("propiedad", obtenerPropiedad);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

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
                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                    </Carousel.Item>
                                </Carousel>
                                <Placeholder xs={6} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
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
                                                propiedad.fotos.map((item) => (
                                                    <Carousel.Item>
                                                        <img src={item.img1} alt="" />
                                                    </Carousel.Item>
                                                    
                                                ))
                                            }
                                            {
                                                propiedad.fotos.map((item) => (
                                                    <Carousel.Item>
                                                        <img src={item.img2} alt="" />
                                                    </Carousel.Item>
                                                    
                                                ))
                                            }
                                        </Carousel>
                                        <div className='container'>{propiedad.descripcion}</div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
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
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cerrar
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
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