import React, {useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

import AlertaContext from "../../context/alertas/alertaContext";

const ListadoProyecto = () => {
    // Extrar proyectos de state inicial 
    const proyectosContext = useContext(proyectoContext);
    const {mensaje,proyectos,obtenerProyectos} = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta , mostrarAlerta} = alertaContext;

    useEffect( () => {
        // si hay alguen error 
        if(mensaje) { 
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        
        obtenerProyectos();
        // eslint-disable-nxt

    }, [mensaje]);
    const proyecto0 = proyectos[0];
    console.log("desde listado proyectos")
    console.log(proyecto0);
    console.log("-------------------------");
    console.log(proyectos);
    if(proyectos.length === 0 ) 

        return <p>No hay proyectos, Comienza Creando uno. </p>;
    
    return (  
        <ul className="listado-proyectos">

            { alerta   ? ( <div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>  ) : null  }

            {proyecto0.map(proyecto => (
                <Proyecto
                key={proyecto._id}
                proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
 
export default ListadoProyecto;