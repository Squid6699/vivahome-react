import React, { useState } from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import {useSesion} from "../hook/useSesion"
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPowerOff, faBars } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../hook/useModal';

function Navbar(){

    const {usuario, nivel} = useSesion();
    const modalLogin = useModal();
    const modalRegister = useModal();

    const handleCerrarSesion = async () => {
        try {
            const response = await fetch("http://localhost:3001/logout", {
                credentials: 'include'
            });
            const data = await response.json();

            if (data.success){
                window.location.href = "/";
            }
        } catch (error) {}
    }

    
    return(
        <>
            <header>
                <Link to={"/"} className="logo">
                    <i className="ri-home-heart-fill"></i> <span>VIVAHOME</span>
                </Link>

                <ul className="navbarApp">
                    <li>
                        <Link to={"/"}>CATALOGO</Link>
        
                    </li>
                </ul>
                
                <div className = "main">
                    {usuario ? 
                    <>
                        <Dropdown>
                            <span>Bienvenido/a {usuario} </span>  
                            <Dropdown.Toggle variant="success">
                                <FontAwesomeIcon icon={faUser}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleCerrarSesion()}><FontAwesomeIcon icon={faPowerOff}/> CERRAR SESION</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* <div className="bx bx-menu" id = "menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarTresP" aria-controls="staticBackdrop"></div> */}
                    </>
                    : 
                    <>
                        <a onClick={() => modalLogin.openModal()}><i><FontAwesomeIcon icon={faUser}/></i>INICIAR SESION</a>
                        <a onClick={() => modalRegister.openModal()}>REGISTRARSE</a>
                        <div><FontAwesomeIcon icon={faBars}/></div>
                    </>
                    }
                </div>

            </header>
            
            {modalLogin.isOpenModal() && <Login showLogin={modalLogin.isOpenModal} handleCloseLogin={modalLogin.closeModal}/>}
            {modalRegister.isOpenModal() && <Register showRegister={modalRegister.isOpenModal} handleCloseRegister={modalRegister.closeModal}/>}

        </>
    );
}

export default Navbar;