import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faCar, faPlay, faStairs, faStop, faStreetView } from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap"
import "../css/filtros.css"

function Filtros(){
    return(
        <>
            <aside className='container-filtros'>
                <div className='filtros'>
                    <form className="formulario formularioFiltros">
                        <h5>FILTROS</h5>
                        <div className="field filtroUbicacion">
                            <div className="input-area">
                                <input type = "text" id="filtroUbicacion" name = "filtroUbicacion" placeholder = "UBICACION"/>
                                <i className='icon'><FontAwesomeIcon icon={faStreetView}/></i>
                            </div>
                        </div>

                        <div className="field filtroAutos">
                            <div className="input-area">
                                <input type="number" id="filtroAutos" name="filtroAutos" placeholder = "AUTOS"/>
                                <i className='icon'><FontAwesomeIcon icon={faCar}/></i>
                            </div>
                        </div>

                        <div className="field fitroBaños">
                            <div className="input-area">
                                <input type="number" id="fitroBaños" name="fitroBaños" placeholder = "BAÑOS"/>
                                <i className='icon'><FontAwesomeIcon icon={faBath}/></i>
                            </div>
                        </div>

                        <div className="field filtroHabitaciones">
                            <div className="input-area">
                                <input type="number" id="filtroHabitaciones" name="filtroHabitaciones" placeholder = "HABITACIONES" />
                                <i className='icon'><FontAwesomeIcon icon={faBed}/></i>
                            </div>
                        </div>

                        <div className="field filtroEscaleras">
                            <div className="input-area">
                                <input type="number" id="filtroEscaleras" name="filtroEscaleras" placeholder = "ESCALERAS"/>
                                <i className='icon'><FontAwesomeIcon icon={faStairs}/></i>
                            </div>
                        </div>

                        <div className="field filtroMetrosCuadrados">
                            <div className="input-area">
                                <input type="number" id="filtroMetrosCuadrados" name="filtroMetrosCuadrados" placeholder = "METROS²"/>
                                <i className="icon ri-ruler-2-fill"></i>
                            </div>
                        </div>

                        <div className="field fitroTipo">
                            <div className="input-area">
                                <select id="fitroTipo" name="fitroTipo" placeholder = "TIPO">
                                    <option value="" disabled>TIPO DE PROPIEDAD</option>
                                    <option value="VENTA">VENTA</option>
                                    <option value="RENTA">RENTA</option>
                                    <option value="TERRENO">TERRENO</option>
                                </select>
                            </div>
                        </div>

                        <div className="field filtroPrecioInicial">
                            <div className="input-area">
                                <input type="number" id="filtroPrecioInicial" name="filtroPrecioInicial" placeholder="$ INICIAL"/>
                                <i className='icon'><FontAwesomeIcon icon={faPlay}/></i>
                            </div>
                        </div>

                        <div className="field filtroPrecioFinal">
                            <div className="input-area">
                                <input type="number" id="filtroPrecioFinal" name="filtroPrecioFinal" placeholder="$ FINAL" />
                                <i className='icon'><FontAwesomeIcon icon={faStop}/></i>
                            </div>
                        </div>

                        <Button className="botonesStyle">APLICAR</Button>
                        <Button className="botonesStyle">LIMPIAR</Button>

                    </form>
                </div>
            </aside>
        </>
    );
}

export default Filtros;
