import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./ProyectoReducer";

import {FORMULARIO_PROYECTO,OBTENER_PROYECTO} from "../../types/index";


const ProyectoState = props => {

    const proyectos = [        
        {id: 1 , nombre: "tienda Virtual" },
        {id: 2,  nombre: "Intranet" },
        {id:3 , nombre: "diseño de Sitio" }
    ];

    const initialState = {
        proyectos: [],
        formulario: false
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

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}

        </proyectoContext.Provider>
    );
}

export default ProyectoState;

