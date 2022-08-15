import React, {useContext, useState} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareasContext";

const FormTarea = () => {

    // Extraer si un proyecto esta activo 
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

     // obtenr la funcion del context de tarea 

     const tareaContext = useContext(TareaContext);
     const {errorTarea,agregarTarea,validarTarea, obtenerTareas} = tareaContext;
 
    //State del formulario

    const [tarea, setTarea ]= useState({
        nombre:""
    })

    const {nombre} = tarea;

     //si no hay proyecto selecionado
    if(!proyecto) return null;
 
 //Array destructuring para extraer el proyecto actual 
 const [proyectoActual] = proyecto;

// leer los  valres del formulario 
 const handleChange = e => {
    setTarea({
        ...tarea,
        [e.target.name] : e.target.value
    })
 }

 const onSubmit = e =>{
    e.preventDefault();

    //validar 
    if(nombre.trim() === "") {
        validarTarea();
        return;

    }

    // pasar la validación 

    //agregar nueva  tarea al state de tareas 
    tarea.proyectoId =  proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    //obtener y filtrar las tareas del proyecto actual 
    obtenerTareas(proyectoActual.id);

    // reiniciar el form 
    setTarea({
        nombre: ""
    })
 }


    return (  
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>

            {errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null }
        </div>
    );
}
 
export default FormTarea;