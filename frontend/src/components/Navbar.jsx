import React, { useState } from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import {useSesion} from "../hook/useSesion"
import { Dropdown, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPowerOff, faBars, faEye, faCalendarDays, faTicket, faCartShopping, faCircleCheck, faPlus, faUpload, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../hook/useModal';
import VerPropiedadesPublicadas from './VerPropiedadesPublicadas';
import { HOST } from '../../config';

function Navbar(){

    const {usuario, nivel} = useSesion();
    const modalLogin = useModal();
    const modalRegister = useModal();
    const offCanvasNavbar = useModal();
    const tusPropiedades = useModal();

    const handleCerrarSesion = async () => {
        try {
            const response = await fetch(HOST+"logout", {
                credentials: 'include'
            });
            const data = await response.json();

            if (data.success){
                window.location.href = "/";
            }
        } catch (error) {}
    }

    const click = () => {
        offCanvasNavbar.openModal();
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
                            <span style={{marginRight: "10px"}}>BIENVENIDO/A {usuario.toUpperCase()} </span>
                            <Dropdown.Toggle variant="success">
                                <FontAwesomeIcon icon={faUser}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><FontAwesomeIcon icon={faUpload}/> PUBLICAR PROPIEDAD</Dropdown.Item>
                                <Dropdown.Item  onClick={() => tusPropiedades.openModal()}><FontAwesomeIcon icon={faEye}/> TUS PROPIEDADES</Dropdown.Item>
                                <Dropdown.Item><FontAwesomeIcon icon={faCalendarDays}/> CITAS AGENDADAS</Dropdown.Item>
                                <Dropdown.Item><FontAwesomeIcon icon={faTicket}/> SOLICITAR AYUDA DE VENDEDOR</Dropdown.Item>

                                {nivel === 2 && <>
                                    <Dropdown.Item><FontAwesomeIcon icon={faPaperPlane}/> PROPIEDADES ASIGNADAS</Dropdown.Item>
                                    <Dropdown.Item><FontAwesomeIcon icon={faUpload}/> SUBIR FOTO</Dropdown.Item>
                                </>}

                                {nivel === 3 && <>
                                    <Dropdown.Item><FontAwesomeIcon icon={faPlus}/> DAR DE ALTA VENDEDOR</Dropdown.Item>
                                    <Dropdown.Item><FontAwesomeIcon icon={faPlus}/> DAR DE ALTA ADMINISTRADORES</Dropdown.Item>
                                    <Dropdown.Item><FontAwesomeIcon icon={faCircleCheck}/> AUTORIZAR PROPIEDADES</Dropdown.Item>
                                    <Dropdown.Item><FontAwesomeIcon icon={faTicket}/> ASIGNAR VENDEDOR</Dropdown.Item>
                                    <Dropdown.Item><FontAwesomeIcon icon={faCartShopping}/> PROPIEDADES VENDIDAS</Dropdown.Item>


                                </>}
                                <Dropdown.Item onClick={() => handleCerrarSesion()}><FontAwesomeIcon icon={faPowerOff}/> CERRAR SESION</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </>
                    : 
                    <>
                        <a onClick={() => modalLogin.openModal()}><i><FontAwesomeIcon icon={faUser}/></i>INICIAR SESION</a>
                        <a onClick={() => modalRegister.openModal()}>REGISTRARSE</a>
                        
                    </>
                    }
                    <FontAwesomeIcon icon={faBars} className = "bars-btn" onClick={() => click()}/>
                </div>

            </header>

            <Offcanvas show={offCanvasNavbar.isOpenModal} onHide={offCanvasNavbar.closeModal} placement={"end"} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Link to={"/"} className="OffCanvaslogo">
                            <i className="ri-home-heart-fill"></i> <span>VIVAHOME</span>
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <ul className="OffCanvasNavbarApp">
                    <li>
                        <Link to={"/"}>CATALOGO</Link>
                    </li>
                </ul>
                </Offcanvas.Body>
            </Offcanvas>
            
            {modalLogin.isOpenModal() && <Login showLogin={modalLogin.isOpenModal} handleCloseLogin={modalLogin.closeModal}/>}
            {modalRegister.isOpenModal() && <Register showRegister={modalRegister.isOpenModal} handleCloseRegister={modalRegister.closeModal}/>}
            {tusPropiedades.isOpenModal() && <VerPropiedadesPublicadas showPropiedades={tusPropiedades.isOpenModal} handleClosePropiedades={tusPropiedades.closeModal}/>}

        </>
    );
}

export default Navbar;