import React, { useReducer } from "react";
import TareaContext from "./tareasContext";
import TareasReduce from "./tareasReduce";

import clienteAxios from "../../config/axios";

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
   
        tareasProyecto:[],
        errorTarea: false, 
        tareaseleccionada: null 
    }

    const [state, dispatch] = useReducer(TareasReduce,initialState);


    //obtener las tareas de un proyecto 

    const obtenerTareas = async proyecto => {
        try {
            const resultado = await clienteAxios.get("api/tareas", {params: {proyecto}});
            dispatch({
                type: TAREAS_PROYECTO,
                payload:resultado.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }

    // AGREGAR UNA TAREA AL PROYECTO SELECCIONADO 
    const agregarTarea  = async tarea => {
        
        try {

            const resultado = await  clienteAxios.post("api/tareas", tarea);

            dispatch({
                type: AGREGAR_TAREA,
                payload:tarea
            })
        } catch (error) {
            console.log(error);
        }
        
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