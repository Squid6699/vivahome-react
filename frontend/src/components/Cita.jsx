import React from 'react'
import { Button, Modal } from 'react-bootstrap';

function Cita({showModalCita, handleCloseModalCita}){
    return(
        <>
            <Modal show={showModalCita} onHide={handleCloseModalCita} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalCita}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseModalCita}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cita;