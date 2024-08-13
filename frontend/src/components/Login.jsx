import React from 'react'
import {Modal} from "react-bootstrap"

import {useSesion} from "../hook/useSesion.js"


function Login({showLogin, handleCloseLogin}){
    const {setUsuario, setNivel} = useSesion();

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
    
        const formInicio = document.querySelector("#formInicio");
        var eField = formInicio.querySelector(".email");
        var eInput = eField.querySelector("input");
        var pField = formInicio.querySelector(".password");
        var pInput = pField.querySelector("input");
    
        let errorPS = false;
        let errorEmail = false;
    
        if (eInput.value === "") {
            eField.classList.add("shake", "error");
            errorEmail = false;
        } else {
            checkEmail();
        }
    
        if (pInput.value === "") {
            pField.classList.add("shake", "error");
            errorPS = false;
        } else {
            checkPass();
        }
    
        setTimeout(()=>{
            eField.classList.remove("shake");
            pField.classList.remove("shake");
        }, 500);
    
        eInput.onkeyup = ()=>{checkEmail();}
        pInput.onkeyup = ()=>{checkPass();}
    
        function checkEmail(){
            let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
            if(!eInput.value.match(pattern)){
                eField.classList.add("error");
                eField.classList.remove("valid");
                let errorTxt = eField.querySelector(".error-txt");
                (eInput.value != "") ? errorTxt.innerText = "INGRESE UN CORREO VALIDO" : errorTxt.innerText = "EL CORREO NO PUEDE ESTAR VACIO";
                errorEmail = false;
            }else{
                eField.classList.remove("error");
                eField.classList.add("valid");
                errorEmail = true;
            }
        }
    
        function checkPass(){
            if(pInput.value === ""){
                pField.classList.add("error");
                pField.classList.remove("valid");
                errorPS = false;
            }else{
                pField.classList.remove("error");
                pField.classList.add("valid");
                errorPS = true;
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
            const response = await fetch("http://localhost:3001/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo: eInput.value, contrasena: pInput.value }),
                // credentials: 'include'
            })
    
            const data = await response.json();
            if (response.ok){
                setUsuario(data.usuario);
                setNivel(data.nivel);
            }
        }catch(err){
            throw new Error("OCURRIO UN ERROR AL INTENTAR INICIAR SESION");
        }
    }

    return(
        <>
            <Modal show={showLogin} size="lg" onHide={handleCloseLogin} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>INICIAR SESION</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className = "formulario" id = "formInicio" onSubmit={handleSubmitLogin}>
                        <div className="field email">
                            <div className="input-area">
                                <input type="text" id="correo" name="correo" placeholder="CORREO ELECTRONICO"/>
                                <i className="icon ri-mail-fill"></i>
                            </div>
                            <div className="error error-txt">EL CORREO NO PUEDE ESTAR VACIO</div>
                        </div>
                        <div className="field password">
                            <div className="input-area">
                                <input type="password" id="password" name="password" placeholder="CONTRASEÑA"/>
                                <i className="icon ri-lock-fill"></i>
                            </div>
                            <div className="error error-txt">LA CONTRASEÑA NO PUEDE ESTAR VACIA</div>
                            <div id="mensajeErrorCred" className="error error-txt" style={{display: "none"}}>CORREO ELECTRONICO Y/O CONTRASEÑA INVALIDOS</div>
                        </div>
                        <div className="pass-txt"><a href="#">OLVIDASTE LA CONTRASEÑA?</a></div>
                        <input type="submit" name="iniciar" value="INICIAR"/>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Login;