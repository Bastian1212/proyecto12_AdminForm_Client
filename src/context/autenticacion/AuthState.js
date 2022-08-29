import React, {useReducer} from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

import { REGISTRO_EXISTOSO,
    REGISTRO_ERROR, 
    OBTENER_USUARIOS,
    LOGIN_EXISTOSO,
    LOGIN_ERROR,
    CERRAR_SESION } from "../../types";


    const AuthState = props => {

        const initialState = { 
            token:localStorage.getItem("token"),
            autenticado: null,
            usuario:null, 
            mensaje:null 
        }
        const [state, dispatch] = useReducer(authReducer, initialState);
        
        const registrarUsuario = async datos => {
            try {
                const respuesta = await clienteAxios.post("/api/usuarios",datos);
                console.log(respuesta.data.token);
                dispatch({
                    type : REGISTRO_EXISTOSO,
                    payload : respuesta.data.token
                });
                // obtenr el usuario 
                usuarioAutenticado(respuesta.data.token);

            } catch (error) {
                //console.log(error.response.data.msg);
                const alerta = {
                    msg: error.response.data.msg,
                    categoria: "alerta-error"

                }
                dispatch({
                    type: REGISTRO_ERROR,
                    payload: alerta
                })
                
            }
        }

        // retorna eñ usuario autenticado 

        const usuarioAutenticado = async (token) => {
           // const token = localStorage.getItem("token");
            if(token){
                // Funcion para enviar el token por headers 
                console.log(token);
                tokenAuth(token);

            }
            try {
                const respuesta = await clienteAxios.get("/api/auth");
                console.log(respuesta.data.usuario);
                dispatch({
                    type: OBTENER_USUARIOS, 
                    payload : respuesta.data.usuario
                });

            } catch (error) {
                console.log(error.response);
                dispatch({
                    type: LOGIN_ERROR
                })
            }
        }




        return (
            <authContext.Provider
                value={{
                    token: state.token,
                    autenticado: state.autenticado,
                    usuario: state.usuario,
                    mensaje: state.mensaje,
                    registrarUsuario
                }}
            >
                {props.children}
            </authContext.Provider>
        )
    }

    export default AuthState;