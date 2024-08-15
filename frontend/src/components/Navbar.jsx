import React, { useState } from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import {useSesion} from "../hook/useSesion"
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';

function Navbar(){

    const {usuario, nivel} = useSesion();
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleCloseLogin = () => {
        setShowLogin(false);
    }

    const handleCloseRegister = () => {
        setShowRegister(false);
    }

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

                <ul className="navbar">
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
                    </>
                    : 
                    <>
                        <a className="user" onClick={() => setShowLogin(true)}><i className="ri-user-fill"></i>INICIAR SESION</a>
                        <a className="user" onClick={() => setShowRegister(true)}>REGISTRARSE</a>
                    </>
                    }
                </div>

            </header>
            {showLogin && <Login showLogin={showLogin} handleCloseLogin={handleCloseLogin}/>}
            {showRegister && <Register showRegister={showRegister} handleCloseRegister={handleCloseRegister}/>}

        </>
    );
}

export default Navbar;