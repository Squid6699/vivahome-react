import React, { useState } from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import {useSesion} from "../hook/useSesion"

function Navbar(){

    const {usuario} = useSesion();
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleCloseLogin = () => {
        setShowLogin(false);
    }

    const handleCloseRegister = () => {
        setShowRegister(false);
    }

    
    return(
        <>
            <header>
                <Link to={"/"} className="logo">
                    <i className="ri-home-heart-fill"></i> <span>VIVAHOME</span>
                </Link>

                <ul className="navbar">
                    <li>
                        <Link to={"/"}>INICIO</Link>
        
                    </li>
                </ul>
                
                <div className = "main">
                    {usuario ? "INICIASTE SESION" : 
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