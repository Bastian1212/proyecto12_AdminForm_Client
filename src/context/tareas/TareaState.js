import React, { useReducer } from "react";
import TareaContext from "./tareasContext";
import TareasReduce from "./tareasReduce";


import {TAREAS_PROYECTO} from "../../types/index"

const TareaState = props => {

   

    const initialState = {
        tareas: [
            {nombre: "Elegir Plataforma", estado:true, proyectoId: 1},
            {nombre: "Elegir  Colores", estado:false, proyectoId: 2},
            {nombre: "Elegir Plataformas pago ", estado:false, proyectoId: 3},
            {nombre: "Elegir Elegir Hosting", estado:true, proyectoId: 4 },
            {nombre: "Elegir Plataforma", estado:true, proyectoId: 1},
            {nombre: "Elegir  Colores", estado:false, proyectoId: 2},
            {nombre: "Elegir Plataformas pago ", estado:false, proyectoId: 3},
            {nombre: "Elegir Elegir Hosting", estado:true, proyectoId: 4 },
            {nombre: "Elegir Plataforma", estado:true, proyectoId: 2},
            {nombre: "Elegir  Colores", estado:false, proyectoId: 3},
            {nombre: "Elegir Plataformas pago ", estado:false, proyectoId: 4},
            {nombre: "Elegir Elegir Hosting", estado:true, proyectoId: 3 }
        ],
        tareasProyecto:null
    }

    const [state, dispatch] = useReducer(TareasReduce,initialState);


    //obtener las tareas de un proyecto 

    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload:proyectoId
        })
    }

    return (

        <TareaContext.Provider
         value={{
            tareas:state.tareas,
            tareasProyecto: state.tareasProyecto,
            obtenerTareas
         }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}


export default TareaState;