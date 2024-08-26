import React from 'react'
import { Modal } from 'react-bootstrap';

function VerPropiedadesPublicadas({showPropiedades, handleClosePropiedades}){
    return(
        <>
            <Modal show={showPropiedades} size="xl" onHide={handleClosePropiedades} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>TUS PROPIEDADES</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default VerPropiedadesPublicadas;