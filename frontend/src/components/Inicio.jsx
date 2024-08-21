import React, { useEffect, useState } from 'react'
import "../css/inicio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar.jsx"
import Filtros from './Filtros.jsx';
import Catalogo from './Catalogo.jsx';
import { Button } from 'react-bootstrap';
import { useQuery } from "react-query";

function Inicio(){
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

    const toggleFiltros = () => {
        setMostrarFiltros(!mostrarFiltros);
    };

    const INITIAL_FILTERS = {
        ubicacion: "",
        autos: "",
        banos: "",
        habitacion: "",
        escaleras: "",
        metros: "",
        tipo: "",
        pInicial: "",
        pFinal: "",
    }

    const [filters, setFilters] = useState(INITIAL_FILTERS);

    const handleFilters = (f) => {
        setFilters(f);
    }

    const removeFilters = () => {
        setFilters(INITIAL_FILTERS);
    }

    const { data: propiedades, isLoading, refetch, isRefetching } = useQuery("propiedades", obtenerPropiedades);

    useEffect(() => {
        refetch();
    },[filters]);

    async function obtenerPropiedades() {
        try {
            const response = await fetch(`http://localhost:3001/filtrarpropiedades?ubicacion=${filters.ubicacion}&autos=${filters.autos}&banos=${filters.banos}&habitacion=${filters.habitacion}&escaleras=${filters.escaleras}&metros=${filters.metros}&tipo=${filters.tipo}&pInicial=${filters.pInicial}&pFinal=${filters.pFinal}`);
            const data = await response.json();

            if (data.success){
                return(data.propiedades);
            }else{
                return [];
            }
        } catch (error) {
            throw new Error("OCURRIO UN ERROR");
        }
    }

    return(
        <>
            <Navbar />
            <section className="containerApp">
                {mostrarFiltros && <Filtros show={mostrarFiltros} handleCloseFiltros={toggleFiltros} handleFilters={handleFilters} removeFilters={removeFilters}/>}
                
                <div className="containerAppCatalogo">
                    <div className='botonera'>
                        <Button className='botonesStyle' onClick={toggleFiltros}>
                            <FontAwesomeIcon icon={faFilter}/> FILTROS
                        </Button>
                    </div>
                    <Catalogo isLoading={isLoading} isRefetching={isRefetching} propiedades={propiedades}/>
                </div>

            </section>
            
            
        </>
    );
}

export default Inicio;