import React, { useState } from 'react'
import "../css/inicio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar.jsx"
import Filtros from './Filtros.jsx';
import Catalogo from './Catalogo.jsx';
import { Button } from 'react-bootstrap';

function Inicio(){
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

    const toggleFiltros = () => {
        setMostrarFiltros(!mostrarFiltros);
    };

    return(
        <>
            <Navbar />
            <section className="containerApp">
                {mostrarFiltros && <Filtros show={mostrarFiltros} handleCloseFiltros={toggleFiltros}/>}
                
                <div className="containerAppCatalogo">
                    <div className='botonera'>
                        <Button className='botonesStyle' onClick={toggleFiltros}>
                            <FontAwesomeIcon icon={faFilter}/> FILTROS
                        </Button>
                    </div>
                    <Catalogo/>
                </div>

            </section>
            
            
        </>
    );
}

export default Inicio;