import React, { useEffect, useState } from 'react'
import "../css/inicio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar.jsx"
import Filtros from './Filtros.jsx';
import Catalogo from './Catalogo.jsx';
import { Button, Pagination } from 'react-bootstrap';
import { useQuery } from "react-query";
import { useModal } from '../hook/useModal.js';

function Inicio(){
    const { data: propiedades, isLoading, refetch, isRefetching } = useQuery("propiedades", obtenerPropiedades);
    const {isOpenModal, openModal, closeModal} = useModal();
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);

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

    async function obtenerPropiedades() {
        try {
            const response = await fetch(`http://localhost:3001/filtrarpropiedades?ubicacion=${filters.ubicacion}&autos=${filters.autos}&banos=${filters.banos}&habitacion=${filters.habitacion}&escaleras=${filters.escaleras}&metros=${filters.metros}&tipo=${filters.tipo}&pInicial=${filters.pInicial}&pFinal=${filters.pFinal}&pagina=${pagina}`);
            const data = await response.json();

            if (data.success){
                setTotalPaginas(data.paginas)
                return(data.propiedades);
            }else{
                return [];
            }
        } catch (error) {
            throw new Error("OCURRIO UN ERROR");
        }
    }

    const handleFilters = (f) => {
        setFilters(f);
    }

    const removeFilters = () => {
        setFilters(INITIAL_FILTERS);
    }


    useEffect(() => {
        refetch();
    },[filters, pagina]);

    let items = [];
    for (let number = 1; number <= totalPaginas; number++) {
        items.push(
            <Pagination.Item key={number} active={number === pagina} onClick={() => setPagina(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return(
        <>
            <Navbar />
            <section className="containerApp">
                {isOpenModal && <Filtros show={isOpenModal} closeModal = {closeModal} handleFilters={handleFilters} removeFilters={removeFilters}/>}
                
                <div className="containerAppCatalogo">
                    <div className='botonera'>
                        <Button className='botonesStyle' onClick={openModal}>
                            <FontAwesomeIcon icon={faFilter}/> FILTROS
                        </Button>
                    </div>
                    <Catalogo isLoading={isLoading} isRefetching={isRefetching} propiedades={propiedades}/>
                </div>

                <Pagination>
                    <Pagination.Prev onClick={() => setPagina(pagina-1)} disabled = {pagina === 1}/>
                        {items}
                    <Pagination.Next onClick={() => setPagina(pagina+1)} disabled = {pagina === totalPaginas}/>
                </Pagination>

            </section>
            
        </>
    );
}

export default Inicio;