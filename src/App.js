import './App.css';
import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './charliecorp/Home';
import QuienesSomos from './charliecorp/QuienesSomos';
import Navbar from './charliecorp/Navbar/Navbar';
import LoginDos from './charliecorp/LoginDos';
import PrincipalLogin from './charliecorp/PrincipalLogin';
import HomeDos from './charliecorp/HomeDos';
import NuestroProyecto from './charliecorp/NuestroProyecto';
//import 'bootstrap/dist/css/bootstrap.min.css'
//import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import MostrarDatos from './charliecorp/MostrarDatos';
import Graficas from './charliecorp/Graficas';
import SiguientesPasos from './charliecorp/SiguientesPasos';


function App() {
  
  const adminUser = {
    email:  "admin@charliecorp.com",
    password: 'admin123'
}

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in");
    setUser({
      name: details.name,
      email: details.email
    });
  }
    else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }    
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    
    <div className="app">
        <Router>

        <Switch>

        <Route path="/graficas">
          <Navbar />
          <Graficas />
        </Route>

        <Route path="/siguientes-pasos">
          <Navbar />
          <SiguientesPasos />
        </Route>

        <Route path="/mostrar-datos">
          <Navbar />
          <MostrarDatos />
        </Route>

        <Route path="/homee">
          <Navbar />
          <HomeDos />
        </Route>

        <Route path="/nuestro-proyecto">
          <Navbar />
          <NuestroProyecto />
        </Route>

        <Route path="/quienes-somos">
          <Navbar />
          <QuienesSomos />
        </Route>

{/*
        <Route path="/quienes-somos">
          <Navbar />
          <QuienesSomos />
          </Route>

        <Route path="/quienes-somos">
          <Navbar />
          <QuienesSomos />
          </Route>
  */}
  
        <Route path="/login">
          {(user.email != "") ? (
            <PrincipalLogin />
          ):(
          <LoginDos Login={Login} error={error} />
          )}
          </Route>

          <Route path="/">
          <Home />
          </Route>

        </Switch>

      </Router>
    
    </div>
  );
}

export default App;
