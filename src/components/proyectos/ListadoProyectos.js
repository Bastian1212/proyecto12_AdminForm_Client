import React from "react";
import Proyecto from "./Proyecto";
const ListadoProyecto = () => {

    const proyectos = [
        {nombre:"tienda Virtual"},
        {nombre:"Intranet"},
        {nombre:"diseño de Sitio"}

    ];

    return (  
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
 
export default ListadoProyecto;