import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Instructions.css";

class Instructions extends Component {

  render() {

    return (

      <div className="inst">
      <div className="titleIns">
        <h1> ¿Qué permite City for all? </h1>
        <p> City for all es una aplicación que te muestra espacios que cumplen con los requisitos de accesibilidad según tu ubicación eh intereses </p>
      </div>
        <div className="boxInst">

        <div className="instStyle">
        <div className="boxImg"><img  alt="f1" className="imgHome" src="https://github.com/AnaPaulaMontap/hackathon-here/blob/master/src/Componentes/camila/like.png?raw=true" /> </div>
        <p> Encontrar los lugares de tu interés que cumplan las normativas de accesibilidad </p>
        </div>

        <div className="instStyle">
        <div className="boxImg"><img  className="imgHome" alt="f2"src="https://github.com/AnaPaulaMontap/hackathon-here/blob/master/src/Componentes/camila/test.png?raw=true" /> </div>
        <p> Previene antes de salir buscando lugares con accesibilidad cerca de tu destino  </p>
        </div>

       <div className= "instStyle"> 
       <div className="boxImg"><img  className="imgHome" alt="f3" src="https://github.com/AnaPaulaMontap/hackathon-here/blob/master/src/Componentes/camila/online-reservation.png?raw=true" /> </div>
       <p> Puedes evaluar los lugares que visitaste según qué tan accesibles son </p>
       </div>

       </div>

       <Link to="/Filtro" className="buttonIntructions"> CONTINUAR </Link>

      </div>
    );
  }
}

export default Instructions;