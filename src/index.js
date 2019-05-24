import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import metro from './Json/metro.json'
//import MapasMetro from './Componentes/anapaula/PantallaMapaCategoría/MapaMetro'
// import entretenimiento from './Json/entretencion.json'
// import MapasCategorias from './Componentes/anapaula/PantallaMapaCategoría/MapaCategoría'
//import Filtro from './Componentes/anapaula/PantallaMapaCategoría/Filtro'
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Filtro/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
