import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
      <Link to="/Intructions" className="textHome">
      <img alt="imgHome" src="https://github.com/Msaezcardenas/hackathon-here/blob/master/src/Imagenes/Logo.png?raw=true" /> 
      <h1 className="titleHome"> City for all </h1>
      <p className="homeText">  Sale con City for all y accede a diferentes lugares</p>
      </Link>
      </div>
    );
  }
}

export default Home;
