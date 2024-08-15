import React, { useState } from 'react'
import Catalogo from "./Catalogo"
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Propiedad(){
    const navigate = useNavigate();
    const [showModalPropiedades, setShowModalPropiedades] = useState(true);

    const handleClose = () => {
        setShowModalPropiedades(false);
        navigate(`/`);
    }

    return(
        <>
            <Catalogo/>
            <Modal show={showModalPropiedades} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
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
        </>
    );
}

export default Propiedad;