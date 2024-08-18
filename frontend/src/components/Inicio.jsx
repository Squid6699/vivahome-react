import React, { useState } from 'react'
import "../css/inicio.css"

import Navbar from "./Navbar.jsx"
import Filtros from './Filtros.jsx';
import Catalogo from './Catalogo.jsx';
import { Button } from 'react-bootstrap';

function Inicio(){
    const [mostrarFiltros, setMostrarFiltros] = useState(window.localStorage.getItem("filtros") === "true" || false);

    const toggleFiltros = () => {
        setMostrarFiltros(!mostrarFiltros);
        window.localStorage.setItem("filtros", !mostrarFiltros);
    };

    return(
        <>
            <Navbar />
            <section className={`containerApp ${!mostrarFiltros ? 'ocultar-filtros' : ''}`}>
                <section className='botones'>
                    <Button className='botonesStyle' onClick={toggleFiltros}>
                        {mostrarFiltros ? 'OCULTAR FILTROS' : 'MOSTRAR FILTROS'}
                    </Button>
                </section>
                {mostrarFiltros && <Filtros/>}
                <Catalogo/>
            </section>
            
        </>
    );
}

export default Inicio;