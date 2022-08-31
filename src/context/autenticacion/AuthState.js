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
            mensaje:null,
            cargando:true
        }
        const [state, dispatch] = useReducer(authReducer, initialState);
        
        const registrarUsuario = async datos => {
            try {
                const respuesta = await clienteAxios.post("/api/usuarios",datos);
                //console.log(respuesta.data.token);
                dispatch({
                    type : REGISTRO_EXISTOSO,
                    payload : respuesta.data.token
                });
                // obtener el usuario 
                setTimeout(() => {
                    usuarioAutenticado();
                }, 100);

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

        // retorna el usuario autenticado 

        const usuarioAutenticado = async () => {
            const token = localStorage.getItem('token');
            // console.log("desde autenticacion de usuario ");
            // console.log(localStorage.getItem('token'));
            // console.log("---------------------------------");
            if(true){
                // Funcion para enviar el token por headers 
                // console.log("hola");
                tokenAuth(token);

            }
            try {
                const respuesta = await clienteAxios.get("/api/auth");
                //console.log(respuesta.data.usuario);
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

        //Cuando el usuarios inicia sesión 

        const iniciarSesion = async datos => {
            try {
                const respuesta = await clienteAxios.post("/api/auth",datos);
                // console.log("desde iniciar session ");
                // console.log(respuesta.data.token);
                dispatch({
                    type : LOGIN_EXISTOSO,
                    payload : respuesta.data.token
                }); 
                //
                
                setTimeout(() => {
                    usuarioAutenticado();
                }, 100);

                
            } catch (error) {
                console.log(error.response.data.msg);
                const alerta = {
                    msg: error.response.data.msg,
                    categoria: "alerta-error"

                }
                dispatch({
                    type: LOGIN_ERROR,
                    payload: alerta
                })
                
            }

            

            
        }

        const cerrarSesion  = () => {
            dispatch({
                type: CERRAR_SESION
            })
        }



        return (
            <authContext.Provider
                value={{
                    token: state.token,
                    autenticado: state.autenticado,
                    usuario: state.usuario,
                    mensaje: state.mensaje,
                    cargando: state.cargando,
                    registrarUsuario,
                    iniciarSesion,
                    usuarioAutenticado,
                    cerrarSesion
                }}
            >
                {props.children}
            </authContext.Provider>
        )
    }

    export default AuthState;