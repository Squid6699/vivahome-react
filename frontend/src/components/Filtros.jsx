import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faStreetView } from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap"
import "../css/filtros.css"

function Filtros(){
    return(
        <>
            <aside className='container-filtros'>
                <div className='filtros'>
                    <form className="formulario formularioFiltros">
                        <h5>FILTROS</h5>
                        <div class="field filtroUbicacion">
                            <div class="input-area">
                                <input type = "text" id="filtroUbicacion" name = "filtroUbicacion" placeholder = "UBICACION"/>
                                <i className='icon'><FontAwesomeIcon icon={faStreetView}/></i>
                            </div>
                        </div>

                        <div class="field filtroAutos">
                            <div class="input-area">
                                <input type="number" id="filtroAutos" name="filtroAutos" placeholder = "AUTOS"/>
                                <i className='icon'><FontAwesomeIcon icon={faCar}/></i>
                            </div>
                        </div>

                        <div class="field fitroBaños">
                            <div class="input-area">
                                <input type="number" id="fitroBaños" name="fitroBaños" placeholder = "BAÑOS"/>
                                <i class="icon fa-solid fa-bath"></i>
                            </div>
                        </div>

                        <div class="field filtroHabitaciones">
                            <div class="input-area">
                                <input type="number" id="filtroHabitaciones" name="filtroHabitaciones" placeholder = "HABITACIONES" />
                                <i class="icon fa-solid fa-bed"></i>
                            </div>
                        </div>

                        <div class="field filtroEscaleras">
                            <div class="input-area">
                                <input type="number" id="filtroEscaleras" name="filtroEscaleras" placeholder = "ESCALERAS"/>
                                <i class="icon fa-solid fa-stairs"></i>
                            </div>
                        </div>

                        <div class="field filtroMetrosCuadrados">
                            <div class="input-area">
                                <input type="number" id="filtroMetrosCuadrados" name="filtroMetrosCuadrados" placeholder = "METROS²"/>
                                <i class="icon ri-ruler-2-fill"></i>
                            </div>
                        </div>

                        <div class="field fitroTipo">
                            <div class="input-area">
                                <select id="fitroTipo" name="fitroTipo" placeholder = "TIPO">
                                    <option value="" selected disabled>TIPO DE PROPIEDAD</option>
                                    <option value="VENTA">VENTA</option>
                                    <option value="RENTA">RENTA</option>
                                    <option value="TERRENO">TERRENO</option>
                                </select>
                            </div>
                        </div>

                        <div class="field filtroPrecioInicial">
                            <div class="input-area">
                                <input type="number" id="filtroPrecioInicial" name="filtroPrecioInicial" placeholder="$ INICIAL"/>
                                <i class="icon fa-solid fa-play"></i>
                            </div>
                        </div>

                        <div class="field filtroPrecioFinal">
                            <div class="input-area">
                                <input type="number" id="filtroPrecioFinal" name="filtroPrecioFinal" placeholder="$ FINAL" />
                                <i class="icon fa-solid fa-stop"></i>
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
