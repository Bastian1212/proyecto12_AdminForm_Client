import React from "react";
//import { BrowserRouter as Router, Routes , Route , Switch} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";

import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";
import AlertaState from "./context/alertas/AlertaState"
import AuthState from "./context/autenticacion/AuthState";
import tokenAuth from "./config/token";
// revisar si tenemos un token
const token = localStorage.getItem("token");
if(token){
  tokenAuth(token);

}


function App() {
  return (
    <AuthState>
      <AlertaState>
        <ProyectoState>
          <TareaState>
            <Router>
                <Switch> 
                    <Route  exact path="/" component={Login} />
                    <Route  exact path="/nueva-cuenta"  component={NuevaCuenta} />
                    <Route  exact path="/proyectos" component={Proyectos} />
                </Switch>
              </Router>
          </TareaState>
        </ProyectoState>
      </AlertaState>
    </AuthState>
  );

    
  
    
}

export default App;


