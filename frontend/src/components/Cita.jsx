import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useSesion } from "../hook/useSesion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import { HOST } from '../../config';
import { useNavigate } from 'react-router-dom';

function Cita({showModalCita, handleCloseModalCita, propiedad}){
    const MySwal = withReactContent(Swal);
    const {usuario, correo} = useSesion();
    const navigate = useNavigate();

    const handleSubmitCita = async (e) => {
        e.preventDefault();
        const form = document.querySelector("#formCita_"+propiedad._id);

        var direccionFieldCita = form.querySelector(".direccionCita_"+propiedad._id);
        var direccionInputCita = direccionFieldCita.querySelector("input");
        var telefonoFieldCita = form.querySelector(".telefonoCita_"+propiedad._id)
        var telefonoInputCita = telefonoFieldCita.querySelector("input");

        var nameFieldCita = form.querySelector(".nameCita_"+propiedad._id);
        var nameInputCita = nameFieldCita.querySelector("input");
        var correoFieldCita = form.querySelector(".correoCita_"+propiedad._id); 
        var correoInputCita = correoFieldCita.querySelector("input");
        var fechaFieldCita = form.querySelector(".fechaCita_"+propiedad._id);
        var fechaInputCita = fechaFieldCita.querySelector("input");
        var errorNameCita = false;
        var errorCorreoCita = false;
        var errorFechaCita = false;

        if (nameInputCita.value === "") {
            nameFieldCita.classList.add("shake", "error");
            var errorNameCita = false;
        }else{
            checkNameCita();
        }

        if (correoInputCita.value === "") {
            correoFieldCita.classList.add("shake", "error");
            errorCorreoCita = false;
        } else {
            checkEmailCita();
        }

        if (fechaInputCita.value === "") {
            fechaFieldCita.classList.add("shake", "error");
        }else {
            checkCita();
        }

        setTimeout(()=>{
            nameFieldCita.classList.remove("shake");
            correoFieldCita.classList.remove("shake");
            fechaFieldCita.classList.remove("shake");
        }, 500);
        
        nameInputCita.onkeyup = ()=>{checkNameCita();}
        correoInputCita.onkeyup = ()=>{checkEmailCita();}
        fechaInputCita.onkeyup = ()=>{checkCita();}

        function checkNameCita(){
            if(nameInputCita.value === ""){
                nameFieldCita.classList.add("error");
                nameFieldCita.classList.remove("valid");
                errorNameCita = false;
            }else{
                nameFieldCita.classList.remove("error");
                nameFieldCita.classList.add("valid");
                errorNameCita = true;
            }
        }

        function checkEmailCita(){
            let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
            if(!correoInputCita.value.match(pattern)){
                correoFieldCita.classList.add("error");
                correoFieldCita.classList.remove("valid");
                let errorTxt = correoFieldCita.querySelector(".error-txt");
                (correoInputCita.value != "") ? errorTxt.innerText = "INGRESE UN CORREO VALIDO" : errorTxt.innerText = "EL CORREO NO PUEDE ESTAR VACIO";
                errorCorreoCita = false;
            }else{
                correoFieldCita.classList.remove("error");
                correoFieldCita.classList.add("valid");
                errorCorreoCita = true;
            }
        }

        function checkCita(){
            if(fechaInputCita.value === ""){
                fechaFieldCita.classList.add("error");
                fechaFieldCita.classList.remove("valid");
                errorFechaCita = false;
            }else{
                fechaFieldCita.classList.remove("error");
                fechaFieldCita.classList.add("valid");
                errorFechaCita = true;
            }
        }
    
        var fechaActual = new Date();
        var fechaCitaUsuario = new Date(fechaInputCita.value);

        

        if (fechaCitaUsuario < fechaActual) {
            errorFechaCita = false;
        } else {
            errorFechaCita = true;
        }

        if (fechaInputCita.value === ""){
            errorFechaCita = false;
        }
        
        if (errorCorreoCita && errorNameCita && errorFechaCita){
            try {
                const response = await fetch(HOST+"agendarcita", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({correoUsuario: correo, idPropiedad: propiedad._id, direccion: direccionInputCita.value , nombreCompleto: nameInputCita.value, correo: correoInputCita.value, telefono: telefonoInputCita.value, fecha: fechaInputCita.value })
                })
    
                const data = await response.json();
    
                if (data.success){
                    navigate(`/`);
                    MySwal.fire({
                        title: <p>AGENDAR CITA</p>,
                        text: data.error,
                        icon: "success",
                        confirmButtonColor: "var(--main-color)",
                        color: "var(--text-color)",
                        background: "var(--bg-color)",
                        customClass: {
                            popup: 'ventanaConfirmacion',
                        }
                    })
                }else{
                    navigate(`/`);
                    MySwal.fire({
                        title: <p>AGENDAR CITA</p>,
                        text: data.error,
                        icon: "error",
                        confirmButtonColor: "var(--main-color)",
                        color: "var(--text-color)",
                        background: "var(--bg-color)",
                        customClass: {
                            popup: 'ventanaConfirmacion',
                        }
                    })
                }
            } catch (error) {
                navigate(`/`);
                MySwal.fire({
                    title: <p>AGENDAR CITA</p>,
                    text: data.error,
                    icon: "error",
                    confirmButtonColor: "var(--main-color)",
                    color: "var(--text-color)",
                    background: "var(--bg-color)",
                    customClass: {
                        popup: 'ventanaConfirmacion',
                    }
                })
            }
        }

        
        
        
    }
    
    return(
        <>
            <Modal show={showModalCita} onHide={handleCloseModalCita} size='lg' backdrop= "static">
                <Modal.Header closeButton>
                    <Modal.Title>AGENDAR CITA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="formulario" id={`formCita_${propiedad._id}`} onSubmit={handleSubmitCita}>
                        <div className={`field direccionCita_${propiedad._id}`}>
                            <div className="input-area">
                                <input type="text" id={`direccionCita_${propiedad._id}`} value = {propiedad.direccion} readOnly/>
                                <i className="icon"><FontAwesomeIcon icon={faLocationDot}/></i>
                            </div>
                        </div>
                        <div className={`field nameCita_${propiedad._id}`}>
                            <div className="input-area">
                                <input type="text" id={`nameCita_${propiedad._id}`} placeholder="NOMBRE COMPLETO" defaultValue={usuario}/>
                                <i className="icon ri-user-fill"></i>
                            </div>
                            <div className="error error-txt">EL NOMBRE NO PUEDE ESTAR VACIO</div>
                        </div>
                        <div className={`field correoCita_${propiedad._id}`}>
                            <div className="input-area">
                                <input type="text" id={`correoCita_${propiedad._id}`} placeholder="CORREO ELECTRONICO" defaultValue={correo}/>
                                <i className="icon ri-mail-fill"></i>
                            </div>
                            <div className="error error-txt">EL CORREO NO PUEDE ESTAR VACIO</div>
                        </div>
                        <div className={`field telefonoCita_${propiedad._id}`}>
                            <div className="input-area">
                                <input type="number" id={`telefonoCita_${propiedad._id}`} placeholder="NUMERO DE TELEFONO"/>
                                <i className="icon ri-phone-fill"></i>
                            </div>
                        </div>
                        <div className={`field fechaCita_${propiedad._id}`}>
                            <div className="input-area">
                                <input type="datetime-local" id={`fechaCita_${propiedad._id}`}/>
                                <i className="icon"><FontAwesomeIcon icon={faCalendarDays}/></i>
                            </div>
                            <div className="error error-txt">LA FECHA/HORA NO PUEDE ESTAR VACIA</div>
                        </div>
                        <Modal.Footer>
                            <input type="submit" name="agendarCita" value="CONFIRMAR"/>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Cita;