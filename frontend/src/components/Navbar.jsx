import React from 'react'
import "../css/Navbar.css"

function Navbar(){
    return(
        <>
            <header>
                <a href="#" className = "logo"> <i className="ri-home-heart-fill"></i> <span>VIVAHOME</span> </a>

                <ul className="navbar">
                    <li><a href="#">INICIO</a></li>
                    
                </ul>

            </header>

        </>
    );
}

export default Navbar;