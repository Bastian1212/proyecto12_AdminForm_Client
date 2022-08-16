import React, {useContext} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareasContext";


const Tarea = ({tarea}) => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    const tareaContext = useContext(TareaContext);
    const {eliminarTarea, obtenerTareas, cambiarEstadoTarea,guardarTareaActual} = tareaContext;
 

    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyecto[0].id);
    }

    // Funcion que modifica ewl estado de las tareas 

    const EstadoTarea = tarea  => { 
        if (tarea.estado){
            tarea.estado = false; 
        }else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    // Agregga una tarea actual cuando el usuario desea editarla 
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    return (  
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                ? 
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() =>EstadoTarea(tarea) }
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() =>EstadoTarea(tarea) }
                        >Incompleto</button>
                    )
                    
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}
 
export default Tarea;