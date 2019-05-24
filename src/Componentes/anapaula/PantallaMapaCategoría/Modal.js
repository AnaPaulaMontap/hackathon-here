import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './modal.css'



class Modal extends Component {
    constructor (props){
        super(props);
        this.state={
            style: 'white',
            color: 'black'
        }

    }

    componentDidMount(){

        if(this.props.data.nivel === "Totalmente Accesible"){
            this.setState({
                style: 'green',
                color: 'white'
            })
        }
        if(this.props.data.nivel === "Medianamente Accesible"){
            this.setState({
                style: 'yellow',
                color: 'white'
            })
        }
        if(this.props.data.nivel === "No Accesible"){
            this.setState({
                style: 'red',
                color: 'white'
            })
        }
    }

    render(){
        console.log(this.props)
   return ( 
   <div className="divAfuera" onClick={(e)=>{
       if ( e.target.getAttribute("class")==="divAfuera"){
           this.props.close()
       }
   }}>
        <div className="divAdentro">
        <div className="titleModal"><h4>{this.props.data.nombre}</h4></div>
        <div><h5 className="nivelModal"
        style={{backgroundColor: this.state.style , color: this.state.color}}        
        >{this.props.data.nivel}</h5></div>       
        
        <div className="bodyModal">
            <h6>Nivel de Accesibilidad</h6>
            <hr></hr>
            <p> - {this.props.data.accesibilidad.baño} posee baños adecuados</p>
            <p> - {this.props.data.accesibilidad.rampa} cuenta con accesos correspondientes y en buen estado</p>
            <p> - Entorno: {this.props.data.accesibilidad.entorno}</p>
        </div>     
            <Link to="/Formulario" className="buttonModal">Evaluar</Link>
        </div>
    </div>
    )
}
}

export default Modal