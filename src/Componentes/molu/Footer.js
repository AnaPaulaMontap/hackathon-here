import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">      
        <Link to="/Metro" className="textFooter"><div><i className="far fa-map" />Mapas</div></Link>        
        <Link to="/Direcciones" className="textFooter"><div><i className="fas fa-route" />Rutas</div></Link>
        <Link to="/Formulario" className="textFooter"><div><i className="far fa-thumbs-up"/>Opinión</div></Link>
      </div>
    );
  }
}

export default Footer;
