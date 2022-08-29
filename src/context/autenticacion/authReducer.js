import React from "react";
import Login from "../../components/auth/Login";
import { REGISTRO_EXISTOSO,
    REGISTRO_ERROR, 
    OBTENER_USUARIOS,
    LOGIN_EXISTOSO,
    LOGIN_ERROR,
    CERRAR_SESION } from "../../types";

export default (state, action) => {
    switch(action.type){
        
        case REGISTRO_EXISTOSO:
        case LOGIN_EXISTOSO:
            localStorage.setItem("token", action.payload);
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }
        case OBTENER_USUARIOS:
            return { 
                ...state, 
                usuario : action.payload
            }
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem("token");
            return {
                ...state, 
                token:null,
                mensaje: action.payload
            }


        default:
            return state;
    }
}