import React, { useReducer } from "react";
import TareaContext from "./tareasContext";
import TareasReduce from "./tareasReduce";


import {TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA} from "../../types/index"

const TareaState = props => {

   

    const initialState = {
        tareas: [
            {id: 1 , nombre: "Elegir Plataforma", estado:true, proyectoId: 1},
            {id: 2, nombre: "Elegir  Colores", estado:false, proyectoId: 2},
            {id: 3, nombre: "Elegir Plataformas pago ", estado:false, proyectoId: 3},
            {id: 4, nombre: "Elegir Elegir Hosting", estado:true, proyectoId: 4 },
            {id: 5,nombre: "Elegir Plataforma", estado:true, proyectoId: 1},
            {id: 6, nombre: "Elegir  Colores", estado:false, proyectoId: 2},
            {id: 7, nombre: "Elegir Plataformas pago ", estado:false, proyectoId: 3},
            {id: 8, nombre: "Elegir Elegir Hosting", estado:true, proyectoId: 4 },
            {id: 9, nombre: "Elegir Plataforma", estado:true, proyectoId: 2},
            {id: 10, nombre: "Elegir  Colores", estado:false, proyectoId: 3},
            {id : 11, nombre: "Elegir Plataformas pago ", estado:false, proyectoId: 4},
            {id :12,nombre: "Elegir Elegir Hosting", estado:true, proyectoId: 3 }
        ],
        tareasProyecto:null,
        errorTarea: false
    }

    const [state, dispatch] = useReducer(TareasReduce,initialState);


    //obtener las tareas de un proyecto 

    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload:proyectoId
        })
    }

    // AGREGAR UNA TAREA AL PROYECTO SELECCIONADO 
    const agregarTarea  = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload:tarea
        })
    }
    // valida y muestra un error. 
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        })

    }
    //elimina tarea por id 
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload:id
        })
    }
    

    return (

        <TareaContext.Provider
         value={{
            tareas:state.tareas,
            tareasProyecto: state.tareasProyecto,
            errorTarea: state.errorTarea,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea
         }}
        >
            {props.children}
        </TareaContext.Provider>
    );
}


export default TareaState;