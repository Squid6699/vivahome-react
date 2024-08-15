import React, { useEffect, useState } from 'react'
import Catalogo from "./Catalogo"
import { Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from "react-query";

function Propiedad(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModalPropiedades, setShowModalPropiedades] = useState(true);
    const { data: propiedad, isLoading, refetch } = useQuery("propiedad", obtenerPropiedad);

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
                    <span>CARGANDO INFORMACION...</span>
                ) : (
                    <>
                        {
                            propiedad ?
                                <Modal show={showModalPropiedades} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className='fs-5'>{propiedad.direccion}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Woohoo, you are reading this text in a modal!
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
                            :
                            <span>NO HAY PROPIEDADES DISPONIBLES.</span>
                        }
                    </>
                    
                )

            }



            
        </>
    );
}

export default Propiedad;