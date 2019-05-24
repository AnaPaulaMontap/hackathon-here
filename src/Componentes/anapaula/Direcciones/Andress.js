import React, { Component } from 'react';
import AddressForm from './AddressForm';


class Adress extends Component {
  render() {
    return (

      <div className="container">
        <div className="row">
          <h2>HERE Geocoder Autocomplete Validation</h2>
        </div>

        <AddressForm />

      </div>

    );
  }
}

export default Adress
