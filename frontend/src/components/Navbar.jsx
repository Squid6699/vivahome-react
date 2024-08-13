import React from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom';

function Navbar(){
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
                    <Link to={"/auth/login"} className="user">
                        <i className="ri-user-fill"></i>INICIAR SESION
                    </Link>
                    <Link to={"/auth/register"}>
                        <span>REGISTRARSE</span>
                    </Link>
                </div>

            </header>

        </>
    );
}

export default Navbar;