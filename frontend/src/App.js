import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import './App.css'


//Componentes / Páginas
import Inicio from './Inicio'
import Nav from './Nav'
import Contacto from './Contacto'
import Tienda from './Tienda'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Inicio}/>
          <Route path="/contacto" exact component={Contacto}/>
          <Route path="/tienda" exact component={Tienda}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
