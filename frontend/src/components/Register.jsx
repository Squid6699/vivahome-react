import React, { useState } from 'react'
import { Modal } from "react-bootstrap"
import { useSesion } from '../hook/useSesion';

function Register({ showRegister, handleCloseRegister }) {
    const {setUsuario, setCorreo, setNivel} = useSesion();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmitRegister = async (e) => {
        e.preventDefault();

        const formRegistro = document.querySelector("#formRegistro");
        const eFieldRegistro = formRegistro.querySelector(".emailRegistro");
        const eInputRegistro = eFieldRegistro.querySelector("input");
        const pFieldRegistro = formRegistro.querySelector(".passwordR");
        const pInputRegistro = pFieldRegistro.querySelector("input");
    
        const nombreFieldRegistro = formRegistro.querySelector(".name");
        const nombreInputRegistro = nombreFieldRegistro.querySelector("input");

        const telefonoFieldRegistro = formRegistro.querySelector(".numero");
        const telefonoInputRegistro = telefonoFieldRegistro.querySelector("input");

        let errorPS = false;
        let errorEmail = false;
        let errorNombre = false;
    
        if (eInputRegistro.value === "") {
            eFieldRegistro.classList.add("shake", "error");
            errorEmail = false;
        } else {
            checkEmail();
        }
    
        if (nombreInputRegistro.value === "") {
            nombreFieldRegistro.classList.add("shake", "error");
            errorNombre = false;
        }
    
        if (pInputRegistro.value === "") {
            pFieldRegistro.classList.add("shake", "error");
            errorPS = false;
        } else {
            checkPass();
        }
    
        setTimeout(()=>{
            eFieldRegistro.classList.remove("shake");
            pFieldRegistro.classList.remove("shake");
            nombreFieldRegistro.classList.remove("shake");
    
        }, 500);
    
        eInputRegistro.onkeyup = ()=>{checkEmail();}
        pInputRegistro.onkeyup = ()=>{checkPass();}
        nombreInputRegistro.onkeyup = ()=>{checkName();}
    
    
        function checkEmail(){
            let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
            if(!eInputRegistro.value.match(pattern)){
                eFieldRegistro.classList.add("error");
                eFieldRegistro.classList.remove("valid");
                let errorTxt = eFieldRegistro.querySelector(".error-txt");
                (eInputRegistro.value != "") ? errorTxt.innerText = "INGRESE UN CORREO VALIDO" : errorTxt.innerText = "EL CORREO NO PUEDE ESTAR VACIO";
                errorEmail = false;
            }else{
                eFieldRegistro.classList.remove("error");
                eFieldRegistro.classList.add("valid");
                errorEmail = true;
            }
        }
    
        function checkPass(){
            if(pInputRegistro.value === ""){
                pFieldRegistro.classList.add("error");
                pFieldRegistro.classList.remove("valid");
                errorPS = false;
            }else{
                pFieldRegistro.classList.remove("error");
                pFieldRegistro.classList.add("valid");
                errorPS = true;
            }
        }
    
        function checkName(){
            if(nombreInputRegistro.value === ""){
                nombreFieldRegistro.classList.add("error");
                nombreFieldRegistro.classList.remove("valid");
                errorNombre = false;
            }else{
                nombreFieldRegistro.classList.remove("error");
                nombreFieldRegistro.classList.add("valid");
                errorNombre = true;
            }
        }
    
        if(!errorEmail){
            e.preventDefault();
            return;
        }
    
        if(!errorPS){
            e.preventDefault();
            return;
        }

        try {
            setLoading(true);
            const response = await fetch("http://localhost:3001/auth/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({nombreCompleto: nombreInputRegistro.value, correo: eInputRegistro.value, contrasena: pInputRegistro.value, telefono: telefonoInputRegistro.value}),
                credentials: "include"
            });

            const data = await response.json();

            if (data.error){
                setError(data.error);
                setTimeout(() =>{
                    setError(null)
                }, 5000)
                setLoading(false);
            }

            if (data.success){
                setUsuario(data.usuario);
                setCorreo(data.correo);
                setNivel(data.nivel);
                window.location.href = '/';
            }

        } catch (error) {
            setLoading(false);
            setError("OCURRIO UN ERROR AL INTENTAR REGISTRARSE");
            throw new Error("OCURRIO UN ERROR AL INTENTAR REGISTRARSE");
        }
    }

    return (
        <>
            <Modal show={showRegister} size="lg" onHide={handleCloseRegister} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>REGISTRARSE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="formulario" id="formRegistro" onSubmit={handleSubmitRegister}>
                        <div className="field name">
                            <div className="input-area">
                                <input type="text" id="nombreCompletoRegistro" name="nombreCompletoRegistro" placeholder="NOMBRE COMPLETO"/>
                                    <i className="icon ri-user-fill"></i>
                            </div>
                            <div className="error error-txt">EL NOMBRE NO PUEDE ESTAR VACIO</div>
                        </div>

                        <div className="field emailRegistro">
                            <div className="input-area">
                                <input type="text" id="correoRegistro" name="correoRegistro" placeholder="CORREO ELECTRONICO"/>
                                    <i className="icon ri-mail-fill"></i>
                            </div>
                            <div className="error error-txt">EL CORREO NO PUEDE ESTAR VACIO</div>
                        </div>

                        <div className="field numero">
                            <div className="input-area">
                                <input type="text" id="telefonoRegistro" name="telefonoRegistro" placeholder="NUMERO DE TELEFONO"/>
                                    <i className="icon ri-phone-fill"></i>
                            </div>
                        </div>

                        <div className="field passwordR">
                            <div className="input-area">
                                <input type="password" id="passwordRegistro" name="passwordRegistro" placeholder="CONTRASEÑA"/>
                                    <i className="icon ri-lock-fill"></i>
                            </div>
                            <div className="error error-txt">LA CONTRASEÑA NO PUEDE ESTAR VACIA</div>
                            <div id="mensajeErrorCorreo" className="error error-txt" style={{display: "none"}}>ESE CORREO YA SE ENCUENTRA REGISTRADO</div>
                        </div>
                        {error && <b style={{color: "red", display: "flex", justifyContent: "center"}}>{error}</b>}
                        
                        {loading ? <button type="submit" name="iniciarRegistro"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> REGISTRAR</button> : <button type="submit" name="iniciarRegistro">REGISTRAR</button>}
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Register;