import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faCar, faPlay, faStairs, faStop, faStreetView } from '@fortawesome/free-solid-svg-icons';
import {Button, Offcanvas} from "react-bootstrap"
import "../css/filtros.css"

function Filtros({show, closeModal, handleFilters, removeFilters}){

    const handleSubmitFiltros = (e) => {
        e.preventDefault();
        var ubicacion = document.getElementById("filtroUbicacion").value;
        var autos = document.getElementById("filtroAutos").value;
        var banos = document.getElementById("fitroBaños").value;
        var habitacion = document.getElementById("filtroHabitaciones").value;
        var escaleras = document.getElementById("filtroEscaleras").value;
        var metros = document.getElementById("filtroMetrosCuadrados").value;
        var tipo = document.getElementById("fitroTipo").value;
        var pInicial = document.getElementById("filtroPrecioInicial").value;
        var fInicial = document.getElementById("filtroPrecioFinal").value;

        handleFilters({
            ubicacion,
            autos,
            banos,
            habitacion,
            escaleras,
            metros,
            tipo, 
            pInicial,
            fInicial
        });
    }

    return(
        <>
            <Offcanvas show={show} onHide={closeModal}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <aside className='container-filtros'>
                        <div className='filtros'>
                            <form className="formulario formularioFiltros" onSubmit={handleSubmitFiltros}>
                                <h5>FILTROS</h5>
                                <div className="field filtroUbicacion">
                                    <div className="input-area">
                                        <input type = "text" id="filtroUbicacion" name = "filtroUbicacion" placeholder = "UBICACION"/>
                                        <i className='icon'><FontAwesomeIcon icon={faStreetView}/></i>
                                    </div>
                                </div>

                                <div className="field filtroAutos">
                                    <div className="input-area">
                                        <input type="number" id="filtroAutos" name="filtroAutos" placeholder = "AUTOS" min={0}/>
                                        <i className='icon'><FontAwesomeIcon icon={faCar}/></i>
                                    </div>
                                </div>

                                <div className="field fitroBaños">
                                    <div className="input-area">
                                        <input type="number" id="fitroBaños" name="fitroBaños" placeholder = "BAÑOS" min={0}/>
                                        <i className='icon'><FontAwesomeIcon icon={faBath}/></i>
                                    </div>
                                </div>

                                <div className="field filtroHabitaciones">
                                    <div className="input-area">
                                        <input type="number" id="filtroHabitaciones" name="filtroHabitaciones" placeholder = "HABITACIONES" min={0} />
                                        <i className='icon'><FontAwesomeIcon icon={faBed}/></i>
                                    </div>
                                </div>

                                <div className="field filtroEscaleras">
                                    <div className="input-area">
                                        <input type="number" id="filtroEscaleras" name="filtroEscaleras" placeholder = "ESCALERAS" min={0}/>
                                        <i className='icon'><FontAwesomeIcon icon={faStairs}/></i>
                                    </div>
                                </div>

                                <div className="field filtroMetrosCuadrados">
                                    <div className="input-area">
                                        <input type="number" id="filtroMetrosCuadrados" name="filtroMetrosCuadrados" placeholder = "METROS²" min={0}/>
                                        <i className="icon ri-ruler-2-fill"></i>
                                    </div>
                                </div>

                                <div className="field fitroTipo">
                                    <div className="input-area">
                                        <select id="fitroTipo" name="fitroTipo" placeholder = "TIPO">
                                            <option value="" defaultValue={""}>TIPO DE PROPIEDAD</option>
                                            <option value="Venta">VENTA</option>
                                            <option value="Renta">RENTA</option>
                                            <option value="Terreno">TERRENO</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="field filtroPrecioInicial">
                                    <div className="input-area">
                                        <input type="number" id="filtroPrecioInicial" name="filtroPrecioInicial" placeholder="$ INICIAL" min={0}/>
                                        <i className='icon'><FontAwesomeIcon icon={faPlay}/></i>
                                    </div>
                                </div>

                                <div className="field filtroPrecioFinal">
                                    <div className="input-area">
                                        <input type="number" id="filtroPrecioFinal" name="filtroPrecioFinal" placeholder="$ FINAL" min={0}/>
                                        <i className='icon'><FontAwesomeIcon icon={faStop}/></i>
                                    </div>
                                </div>

                                <Button type="submit" className="botonesStyle">APLICAR</Button>
                                <Button className="botonesStyle" onClick={() => removeFilters()}>LIMPIAR</Button>

                            </form>
                        </div>
                    </aside>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Filtros;
