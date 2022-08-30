import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./ProyectoReducer";

import {FORMULARIO_PROYECTO,
    OBTENER_PROYECTO
    ,AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR} from "../../types/index";

import clienteAxios from "../../config/axios";
const ProyectoState = props => {


    const initialState = {
        proyectos: [],
        formulario: false,
        errorFormulario : false,
        proyecto:null,
        mensaje : null
    }

    // Dispatch para ejecutar las acciones 

    const [state, dispatch] = useReducer(proyectoReducer,initialState);

    // Serie de funciones para el CRUD 

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = async() => {
        
        try {
            const resultado = await clienteAxios.get("api/proyectos");
            dispatch({
                type :  AGREGAR_PROYECTO,
                payload : resultado.data.proyectos,
                
            })
        } catch (error) {
            const alerta = {
                msg: "Hubo un error", 
                categoria: "alerta-error"
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload:  alerta
            })
        }
        
    }

    const agregarProyecto =  async proyecto => {
        
        try {
            const resultado = await clienteAxios.post("api/proyectos", proyecto);
        
            dispatch({
                type :  AGREGAR_PROYECTO,
                payload : resultado.data,
                
            })
            
        } catch (error) {
            const alerta = {
                msg: "Hubo un error", 
                categoria: "alerta-error"
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload:  alerta
            })
            
        }
        
    }

    //VALIDAR EL FORMULARIO POR ERRORES
    const mostrarError = () =>{
        dispatch({
            type : VALIDAR_FORMULARIO
            
        })

    }

    // Seleciona el proyecto en que el usuario dio click 

    const preyectoActual = proyectoId => {
        dispatch({
            type : PROYECTO_ACTUAL,
            payload : proyectoId,

            
        })
    }

    //ELIMINA UN PROYECTO 
    const eliminarProyecto = async proyectoId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {

            const alerta = {
                msg: "Hubo un error", 
                categoria: "alerta-error"
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload:  alerta
            })
            
        }

    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                preyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}

        </proyectoContext.Provider>
    );
}

export default ProyectoState;

