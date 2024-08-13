import React from 'react'
import {Modal, Button} from "react-bootstrap"

function Register({showRegister, handleCloseRegister}){
    return(
        <>
            <Modal show={showRegister} size="lg" onHide={handleCloseRegister} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseRegister}>
                        Close
                    </Button>
                    <Button className = "btnFormularios" variant="primary" onClick={handleCloseRegister}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Register;