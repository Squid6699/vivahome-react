import React from 'react'

import Navbar from "./Navbar.jsx"
import Filtros from './Filtros.jsx';
import Catalogo from './Catalogo.jsx';


function Inicio(){
    return(
        <>
            <Navbar />
            <section className='container'>
                <Filtros/>
                <Catalogo/>
                
            </section>
            
        </>
    );
}

export default Inicio;