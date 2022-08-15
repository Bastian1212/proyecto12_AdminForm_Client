import Reac, {useContext} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

import TareaContext from "../../context/tareas/tareasContext";

const Proyecto = ({proyecto}) => {
     //obtener el state de proyecto

    const proyectosContext = useContext(proyectoContext);
    const {preyectoActual} = proyectosContext;
    // obtenr la funcion del context de tarea 

    const tareaContext = useContext(TareaContext);
    const {obtenerTareas} = tareaContext;

    //Funcion para agregar el proyecto actual 
    const seleccionarProyecto = id => {
        preyectoActual(id); // figar un proyecto actual 
        obtenerTareas(id); // filtrar las tareas cuando se da click 
    }

    return (  
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => seleccionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>

        </li>
    );
}
 
export default Proyecto;