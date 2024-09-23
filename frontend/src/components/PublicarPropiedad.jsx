import React from 'react'
import { Modal } from 'react-bootstrap';

function PublicarPropiedad({showPublicarPropiedad, handleCloseModalPublicarPropiedades}){
    return(
        <>
            <Modal show = {showPublicarPropiedad} onHide={handleCloseModalPublicarPropiedades} size='xl' scrollable = {true} backdrop = "static" keyboard = {false}>
                <Modal.Header closeButton>
                    <Modal.Title>PUBLICAR PROPIEDAD</Modal.Title>
                </Modal.Header>
            </Modal>
        </>
    );
}

export default PublicarPropiedad;