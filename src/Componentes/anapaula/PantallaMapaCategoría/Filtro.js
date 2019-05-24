import React, { Component } from 'react';
import './MapaCategoría.css';
 import {Link} from 'react-router-dom';
// import back from '../../camila/Vector.png';
// import metro from '../../../Json/metro.json';
// import entretencion from '../../../Json/entretencion.json';
// import MapaCategoria from './MapaCategoría';
// import MapaMetro from './MapaMetro'

class Filtro extends Component {
    constructor(props) {
       super(props);
        this.state={
            holi: "holi",
            wrapperStyleEnjoy: false,
            wrapperStyleMetro: false,
            wrapperStyleBank: false,
            bank:false,
            metro: false,
            enjoy: false,
            titanic:false,
        }
    this.handleChangeEnjoy = this.handleChangeEnjoy.bind(this);
    this.handleChangeBank = this.handleChangeBank.bind(this);
    this.handleChangeMetro = this.handleChangeMetro.bind(this);
    this.handleNavegation = this.handleNavegation.bind(this);
    //this.handleChangeTitanic = this.handleChangeTitanic.bind(this);
    }

    handleChangeEnjoy (){

        this.setState({
           ...this.state,
            wrapperStyleEnjoy: !this.state.wrapperStyleEnjoy,
            enjoy:true,
        })

    }
    handleChangeBank (){

        this.setState({
           ...this.state,
            wrapperStyleBank: !this.state.wrapperStyleBank,
            bank:true,
        })

    }
    handleChangeMetro (){

        this.setState({
           ...this.state,
            wrapperStyleMetro: !this.state.wrapperStyleMetro,
            metro: true,
        })

    }
    handleNavegation (){
       if(this.state.titanic){
       if(this.state.metro){
            this.props.history.push("/Metro")

        }if(this.state.bank || this.state.enjoy){
            this.props.history.push("/Entretencion")
        }
    }
    }

    // handleChangeTitanic (){

    //     this.setState({
    //         ...this.state,
    //          titanic: true,
    //      })
    // }

    render(){

        const button = this.state.bank && this.state.enjoy ?  <Link className="buttonNext" to="/Entretencion">VER LUGARES</Link> :  <Link className="buttonNext" to="/Metro"> VER LUGARES</Link>

        return (
            <div className="filter">
            {/* <img src= {back} alt="back" className="back"/> */}
            <div className="title">
                <h2> ¿Que estas Buscando Hoy?</h2>
                <p>Selecciona las categorías que te interesaría conocer</p>
            </div>
                <div className="row">
                    <div className="column">
                        <div className="enjoyPhoto" onClick={this.handleChangeEnjoy} style={{
                backgroundImage: !this.state.wrapperStyleEnjoy ? `url('https://raw.githubusercontent.com/AnaPaulaMontap/hackathon-here/master/public/assets/cine.jpg')` : `url('https://raw.githubusercontent.com/AnaPaulaMontap/hackathon-here/master/public/assets/entretenimiento.png')` 
            }}/>
                        <span className="categories">ENTRETENIMIENTO</span>                                   
                        <div className="metroPhoto" onClick={this.handleChangeMetro}  style={{
                backgroundImage: !this.state.wrapperStyleMetro ? `url('https://raw.githubusercontent.com/AnaPaulaMontap/hackathon-here/master/public/assets/metro.jpg')` : `url('https://raw.githubusercontent.com/AnaPaulaMontap/hackathon-here/master/public/assets/metroo.png')` }}/>
                        <span className="categories"> METRO </span>
                        <div className="foodPhoto"/>
                        <span className="categories"> COMIDA</span> 

                    </div>

                    <div className="column">
                    <div className="bankPhoto" onClick={this.handleChangeBank}  style={{
                backgroundImage: !this.state.wrapperStyleBank ? `url('https://raw.githubusercontent.com/AnaPaulaMontap/hackathon-here/master/public/assets/cajero.png')` : `url('https://raw.githubusercontent.com/AnaPaulaMontap/hackathon-here/master/public/assets/Banco-cajero.png')` }}/>
                    <span className="categories">BANCOS</span>                    
                    <div className="hospitalPhoto"/>
                    <span className="categories">CENTROS DE SALUD</span>               
                    <div className="shopPhoto"/>
                    <span className="categories">TIENDAS</span>
                    </div>

                </div>
                        {button}
                {/* <button className="buttonNext" onClick={this.handleChangeTitanic}> VER LUGARES </button>
                {this.handleNavegation()} */}
            </div>
        )
    }
}

export default Filtro