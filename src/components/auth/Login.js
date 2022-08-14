import React, {useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {

    const [usuario, setUsuario] = useState({
        email:" ", 
        password:" "
    });

    const {email, password} = usuario;

    const onChange = e => {
        setUsuario({
            ...setUsuario,
            [e.target.name] : e.target.value

        });

    }

    // cuando se da submit  (para iniciar sesion)

    const onSubmit = e => {
        e.preventDefault();
    }

    return (  
        <div className="form-usuario">
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