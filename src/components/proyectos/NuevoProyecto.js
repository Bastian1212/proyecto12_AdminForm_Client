import React, {Fragment, useState} from "react";


const NuevoProyecto = () => {
    const [proyecto, setProyecto] =useState({
        nombre: ""
    });

    const {nombre} = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto, 
            [e.target.name] : e.target.value 
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        //vaidar el proyecto 

        //agregar al state 

        //Reinicar el form 
        
    }
 
    return ( 
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
        >
        Nuevo Proyecto
        </button>

        <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
        >
            <input
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="nombre"
                value={nombre}
                onChange={onChangeProyecto}
            />
            <input 
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Proyecto"
            />
            
            

        </form>


        </Fragment> 
        
    );
}
 
export default NuevoProyecto;