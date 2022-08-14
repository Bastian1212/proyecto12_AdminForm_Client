import Reac, {useContext} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({proyecto}) => {
     //obtener el state de proyecto

    const proyectosContext = useContext(proyectoContext);
    const {preyectoActual} = proyectosContext;

    return (  
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => preyectoActual(proyecto.id)}
            >
                {proyecto.nombre}
            </button>

        </li>
    );
}
 
export default Proyecto;