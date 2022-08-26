import React, {useReducer} from "react";
import authContext from "./authContext";
import alertaReducer from "../alertas/alertaReducer";

import clienteAxios from "../../config/axios";

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
        const [state, dispatch] = useReducer(AuthState, initialState);
        
        const registrarUsuario = async datos => {
            try {
                const respuesta = await clienteAxios.post("/api/usuarios",datos);
                console.log(respuesta);
                dispatch({
                    type : REGISTRO_EXISTOSO
                })
            } catch (error) {
                console.log(error);
                dispatch({
                    type: REGISTRO_ERROR
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