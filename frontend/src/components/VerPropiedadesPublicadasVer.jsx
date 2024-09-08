import React from 'react'
import { Button, Modal } from 'react-bootstrap';

function VerPropiedadesPublicadasVer({showVerPropiedadesVer, handleCloseVerPropiedades, propiedad}){
    return(
        <>
            <Modal show={showVerPropiedadesVer} onHide={handleCloseVerPropiedades}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseVerPropiedades}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseVerPropiedades}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default VerPropiedadesPublicadasVer;