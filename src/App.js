import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";

import ProyectoState from "./context/proyectos/ProyectoState";

function App() {
  return (
    <ProyectoState>
      <Router>
        <Routes> 
            <Route  path="/" element={<Login/>} />
            <Route  path="/nueva-cuenta" element={<NuevaCuenta/>} />
            <Route  path="/proyectos" element={<Proyectos/>} />
        </Routes>
      </Router>
    </ProyectoState>
  );

    
  
    
}

export default App;


