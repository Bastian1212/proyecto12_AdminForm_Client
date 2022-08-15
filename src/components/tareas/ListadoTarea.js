import React, {Fragment, useContext} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Tarea from "./Tarea";

const ListadoTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

    //si no hay proyecto selecionado
    if(!proyecto) 
        return <h2>Selecciona un proyecto</h2>;
    
    //Array destructuring para extraer el proyecto actual 
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        {nombre: "Elegir Plataforma", estado:true},
        {nombre: "Elegir  Colores", estado:false},
        {nombre: "Elegir Plataformas pago ", estado:false},
        {nombre: "Elegir Elegir Hosting", estado:true}
    ]

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