import React, {Fragment, useContext} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareasContext";
import Tarea from "./Tarea";

const ListadoTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;


    const tareaContext = useContext(TareaContext);
    const {tareasProyecto} = tareaContext;

    //si no hay proyecto selecionado
    if(!proyecto) 
        return <h2>Selecciona un proyecto</h2>;
    
    //Array destructuring para extraer el proyecto actual 
    const [proyectoActual] = proyecto;

    

    //Eliminar un proyecto

    const onClickEliminar = () =>{
        eliminarProyecto(proyectoActual.id);
    }

    

    return (  
        <Fragment>
            <h2>Proyecto:  {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No Hay Tareas </p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }

            </ul>
            <button 
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times; </button>
        </Fragment>
    );
        
}
 
export default ListadoTarea;