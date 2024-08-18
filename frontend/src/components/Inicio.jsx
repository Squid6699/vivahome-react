import React from 'react'
import "../css/inicio.css"

import Navbar from "./Navbar.jsx"
import Filtros from './Filtros.jsx';
import Catalogo from './Catalogo.jsx';
import Botonera from './Botonera.jsx';

function Inicio(){
    return(
        <>
            <Navbar />
            <Botonera/>
            <section className='containerApp'>
                <Filtros/>
                <Catalogo/>
            </section>
            
        </>
    );
}

export default Inicio;