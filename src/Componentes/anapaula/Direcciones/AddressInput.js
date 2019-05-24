import React, { Component } from 'react';

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(evt) {
    this.props.onChange(evt);
    console.log(this.props)
  }

  render() {
    return (
      <div className="card"> 
      <span>{this.props.street},{this.props.houseNumber},{this.props.city},{this.props.country}</span>
      </div>
    );
  }
}

export default AddressInput;

  
