import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";

import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Routes> 
              <Route  path="/" element={<Login/>} />
              <Route  path="/nueva-cuenta" element={<NuevaCuenta/>} />
              <Route  path="/proyectos" element={<Proyectos/>} />
          </Routes>
        </Router>
      </TareaState>
    </ProyectoState>
  );

    
  
    
}

export default App;


