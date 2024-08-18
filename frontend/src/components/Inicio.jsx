import React from 'react'
import "../css/inicio.css"

import Navbar from "./Navbar.jsx"
import Filtros from './Filtros.jsx';
import Catalogo from './Catalogo.jsx';


function Inicio(){
    return(
        <>
            <Navbar />
            <section className='containerApp'>
                <Filtros/>
                <Catalogo/>
            </section>
            
        </>
    );
}

export default Inicio;