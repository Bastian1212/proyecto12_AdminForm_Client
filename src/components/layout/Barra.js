import React, {useContext, useEffect} from "react";
import authContext from "../../context/autenticacion/authContext";

const Barra = () => {


    // Extrar la información de sessión 

    const authContext_ = useContext(authContext);
    const {usuario,usuarioAutenticado } = authContext_;
    useEffect(() =>  {
        usuarioAutenticado();
    }, []);

    return ( 
        <header className="app-header">
            {usuario ?
                <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p>
             : null }

            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
                
            </nav>
        </header>
    );
}
 
export default Barra;