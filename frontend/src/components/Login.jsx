import React from 'react'
import {Modal, Button} from "react-bootstrap"

function Login({showLogin, handleCloseLogin}){
    return(
        <>
            <Modal show={showLogin} size="lg" onHide={handleCloseLogin} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLogin}>
                        Close
                    </Button>
                    <Button className = "btnFormularios" variant="primary" onClick={handleCloseLogin}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;