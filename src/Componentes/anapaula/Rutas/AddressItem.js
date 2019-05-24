import React, { Component } from 'react';
import './Route.css'

class AddressItem extends Component {
      constructor(props) {
        super(props);
        this.state = {
            start: '',
            end: ''
        }
        
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeInput2 = this.handleChangeInput2.bind(this);

    }

    handleChangeInput(e) {
        this.setState({
            ...this.state,
            start: e.target.value
        })
    }

    handleChangeInput2(e) {
        this.setState({
            ...this.state,
            end: e.target.value
        })
    }

    render() {
        return (
            <div className="route">
                <input className="inputRoute" onChange={(e) => this.handleChangeInput(e)} value={this.state.start} placeholder="¿Donde quieres partir?"></input>
                <hr></hr>
                <input className="inputRoute" onChange={(e) => this.handleChangeInput2(e)} value={this.state.end} placeholder="¿A donde quieres llegar?"></input>
                <button  className="buttonRoute"onClick={() => this.props.getCoordinates(this.state.start, this.state.end)}>Planificar Mi Ruta</button>
            </div>
        )
    }
}
      

export default AddressItem;

// <div className="row form-group justify-content-start">
        //     <label className="col-sm-4 col-form-label">{this.props.label}</label>
        //     <div className="col-xl-8">
        //         <input
        //           type="text"
        //           id={this.props.id}
        //           defaultValue={this.props.value}
        //           onChange={this.props.onChange}
        //           className="form-control"
        //           placeholder={this.props.placeholder} />
        //     </div>
        // </div>
