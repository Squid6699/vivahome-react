import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import "../css/botonera.css";
import { Button } from 'react-bootstrap';

function Botonera(){
    return(
        <>
            <section className='tags'>
                <Button className='botonesStyle'><FontAwesomeIcon icon={faFilter}/> FILTROS</Button>
            </section>
        </>
    );
}

export default Botonera;