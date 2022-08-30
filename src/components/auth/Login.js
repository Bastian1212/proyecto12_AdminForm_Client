import React, {useState, useContext, useEffect} from "react";
import { Link, BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AlertaContext from "../../context/alertas/alertaContext";
import authContext from "../../context/autenticacion/authContext";

const Login = (props) => {


    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext_ = useContext(authContext);
    const  {mensaje,autenticado,iniciarSesion} = authContext_;

      // En caso de que el usuario se haya autenticado o registado 

    useEffect(() => {
        if(autenticado){
            console.log(autenticado);
            props.history.push('/proyectos');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    }, [mensaje, autenticado, props.history]);




    const [usuario, setUsuario] = useState({
        email:"", 
        password:""
    });

    const {email, password} = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value

        });

    }

    // cuando se da submit  (para iniciar sesion)

    const onSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacios 
        if(email.trim() === "" || password.trim() === "" ){
            mostrarAlerta("todos los campos son obligatorios", "alerta-error");
        }

        iniciarSesion({email, password});

    }

    return (  
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>): null}
            <div className="contenedor-form sombre-dark">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu Email"
                            onChange={onChange}
                        >
                        </input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu Password"
                            onChange={onChange}
                        >
                        </input>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesión"/>
                    </div>

                </form>
                <Link to={"/nueva-cuenta"} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;