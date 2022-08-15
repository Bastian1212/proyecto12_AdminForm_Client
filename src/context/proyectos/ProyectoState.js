import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./ProyectoReducer";

import {FORMULARIO_PROYECTO,
    OBTENER_PROYECTO
    ,AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO} from "../../types/index";


const ProyectoState = props => {

    const proyectos = [        
        {id: 1 , nombre: "tienda Virtual" },
        {id: 2,  nombre: "Intranet" },
        {id:3 , nombre: "diseño de Sitio" }
    ];

    const initialState = {
        proyectos: [],
        formulario: false,
        errorFormulario : false,
        proyecto:null
    }

    // Dispatch para ejecutar las acciones 

    const [state, dispatch] = useReducer(proyectoReducer,initialState);

    // Serie de funciones para el CRUD 

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type : OBTENER_PROYECTO,
            payload : proyectos
        })
        
    }

    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

        dispatch({
            type :  AGREGAR_PROYECTO,
            payload : proyecto,
            
        })
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
    const eliminarProyecto = proyectoId => {
        dispatch({
            type : ELIMINAR_PROYECTO,
            payload : proyectoId,

            
        })

    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
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

