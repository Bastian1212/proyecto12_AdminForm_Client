import React, { useReducer } from "react";
import TareaContext from "./tareasContext";
import TareasReduce from "./tareasReduce";
import { v4 as uuidv4 } from 'uuid';

import {TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA,
        ESTADO_TAREA, 
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA,
        LIMPIAR_TAREA} from "../../types/index"

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
        errorTarea: false, 
        tareaseleccionada: null 
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
        tarea.id = uuidv4();
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

    // cambiar el estado de la tarea 

    const cambiarEstadoTarea = tarea =>{
        dispatch({
            type: ESTADO_TAREA,
            payload:tarea
        })
    }

    //Extrae una tarea para su edición 

    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload:tarea
        })
    }

    // Edita o modifica una tarea 
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload:tarea
        })
    }

    //Eliminar la tareaSelecionada 
    const limpiarTarea  = () => {
        dispatch({
            type:LIMPIAR_TAREA
        })
    } 
    

    return (

        <TareaContext.Provider
         value={{
            tareas:state.tareas,
            tareasProyecto: state.tareasProyecto,
            errorTarea: state.errorTarea,
            tareaseleccionada: state.tareaseleccionada,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstadoTarea,
            guardarTareaActual,
            actualizarTarea,
            limpiarTarea
         }}
        >
            {props.children}
        </TareaContext.Provider>
    );
}


export default TareaState;