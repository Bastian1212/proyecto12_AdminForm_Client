import React, {Fragment, useState, useContext} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorFormulario,mostrarFormulario,agregarProyecto,mostrarError} = proyectosContext;


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

        if(nombre === ""){
            mostrarError();
            return;
        }
        

        //agregar al state 
        agregarProyecto(proyecto);
        //Reinicar el form 

        setProyecto({
            nombre:""
        })
         
    }
    // Mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }
 
    return ( 
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickFormulario}
        >
        Nuevo Proyecto
        </button>

        {
            formulario 
            ?
                (
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
                )
            : null }

            {errorFormulario ? <p className="mensaje error">El nombre del proyecto es obligatorio </p> : null }
     
        </Fragment> 
        
    );
}
 
export default NuevoProyecto;