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

            </header>

        </>
    );
}

export default Navbar;