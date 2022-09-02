import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import authContext from "../../context/autenticacion/authContext";

const NuevaCuenta = (props) => {

    // extraer los valors del context 
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext_ = useContext(authContext);
    const  {mensaje,autenticado,registrarUsuario} = authContext_;

    // En caso de que el usuario se haya autenticado o registado 

    useEffect(() => {
        if(autenticado){
            props.history.push("/proyectos");
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const {nombre,apellido,email,password,confimar} = usuario;


    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value

        });

    }

    const onSubmit = e => {
        e.preventDefault();

        
        
        //validar que los campos no esten vacios 
        if( nombre.trim() === '' || 
            email.trim() === '' || 
            apellido.trim() === '' ||
            password.trim() === '' || 
            confimar.trim() === '' ) {
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
            }

        //password minimo de 6 caracteres 
        if(password.length < 6 ){
            mostrarAlerta("El password debe ser minimo de 6 caracteres ", "alerta-error");
            return;

        }
        //los 2 password iguales 
        if(password !== confimar){
            mostrarAlerta("Los password no son iguales ", "alerta-error");
            return;
        }

        //pasarlos al action 
        registrarUsuario({
            nombre,
            apellido,
            email,
            password
        })
    }




    return (  
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>): null}
        <div className="contenedor-form sombre-dark">
            <h1>Obtener Cuenta</h1>
            <form
                onSubmit={onSubmit}
            >
                <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                </div>
                <div className="campo-form">
                        <label htmlFor="apellido">Apellido</label>
                        <input 
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Tu Apellido"
                            value={apellido}
                            onChange={onChange}
                        />
                </div>
                <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu Email"
                        value={email}
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
                        placeholder="Tu Password"
                        value={password}
                        onChange={onChange}
                    >
                    </input>
                </div>
                <div className="campo-form">
                    <label htmlFor="password"> Confirma  Password</label>
                    <input
                        type="password"
                        id="confirmar"
                        name="confimar"
                        placeholder="Confirma Password"
                        value={confimar}
                        onChange={onChange}
                    >
                    </input>
                </div>
                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block"
                    value="Registrarme"/>
                </div>

            </form>
            <Link to={"/"} className="enlace-cuenta">
                Iniciar Sesión
            </Link>
        </div>
    </div>
    );
}
 
export default NuevaCuenta;