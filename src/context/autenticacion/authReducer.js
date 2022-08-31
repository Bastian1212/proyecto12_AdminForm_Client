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
            // console.log("desde Reducer");
            // console.log(action.payload);
            localStorage.setItem('token', action.payload);
            // console.log("desde localStorage");
            // console.log(localStorage.getItem('token'));
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando:false
            }
        case OBTENER_USUARIOS:
            return { 
                ...state, 
                autenticado:true,
                usuario : action.payload,
                cargando:false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem("token");
            return {
                ...state, 
                token:null,
                usuario: null,
                autenticado:null,
                mensaje: action.payload,
                cargando: false
            }


        default:
            return state;
    }
}