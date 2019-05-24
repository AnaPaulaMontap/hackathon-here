import React, { Component } from 'react';
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import metro from './Json/metro.json'
import entretencion from './Json/entretencion.json'
import Home from './Componentes/molu/Home'
import Instructions from './Componentes/molu/Instructions'
import Filtro from './Componentes/anapaula/PantallaMapaCategoría/Filtro'
import MapaCategoria from './Componentes/anapaula/PantallaMapaCategoría/MapaCategoría'
import MapaMetro from './Componentes/anapaula/PantallaMapaCategoría/MapaMetro'
import AdressComplete from './Componentes/anapaula/Rutas/AdressComplete'
import Form from './Componentes/molu/Form'
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">         
          <Switch>           
            <Route 
              path="/Home"
              render={() => <Home/>} />
            <Route
              path="/Intructions"
              render={() => <Instructions/>}/> 
            <Route
              path="/Filtro"
              render={() => <Filtro/>}/> 
            <Route
              path="/Entretencion"
              render={() => <MapaCategoria data={entretencion}/>}/>  
            <Route
              path="/Metro"
              render={() => <MapaMetro data={metro} />}
            />  
            <Route
              path="/Direcciones"
              render={() =><AdressComplete/> }
            /> 
            <Route
              path="/Formulario"
              render={() => <Form/>}
            />                     
           <Redirect path="*" to="/Home"></Redirect>       
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;