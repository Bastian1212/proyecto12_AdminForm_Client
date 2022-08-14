import React, {Fragment} from "react";
import Tarea from "./Tarea";

const ListadoTarea = () => {

    const tareasProyecto = [
        {nombre: "Elegir Plataforma", estado:true},
        {nombre: "Elegir  Colores", estado:false},
        {nombre: "Elegir Plataformas pago ", estado:false},
        {nombre: "Elegir Elegir Hosting", estado:true}
    ]

    return (  
        <Fragment>
            <h2>Proyecto: Tienda virtual</h2>
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
            >Eliminar Proyecto &times; </button>
        </Fragment>
    );
        
}
 
export default ListadoTarea;