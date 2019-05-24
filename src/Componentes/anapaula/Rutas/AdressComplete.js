import React from 'react';
import Footer from '../../molu/Footer';
import { Link } from 'react-router-dom';
import Map from './map';
import AddressItem from './AddressItem';




export default class AdressComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      app_id: 'LP2ZyQJ7qm17fYnZLySE',
      app_code: '4kTbv-S-8k6wr44_jerEbQ',
      theme: 'normal.day',
      startingPoint: {
        lat: '',
        long: '',
      },
      endingPoint: {
        lat: '',
        long: '',
      },
      marker: null,
    }

    
    this.onAddressChange = this.onAddressChange.bind(this);
    
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            ...this.state,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          // alert(error.message)
          this.setState({
            ...this.state,
            error: error.message
          })
        }
      );
    }
  }


  async onAddressChange(start, end) {
    this.startingPoint = await fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id=" + this.state.app_id + "&app_code=" + this.state.app_code + "&searchtext=" + start)
      .then(data => data.json())
      .then(data => {
        return {
          lat: data.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,
          long: data.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,
          address: data.Response.View[0].Result[0].Location.Address.Label,
        }
      })
    this.endingPoint = await fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id=" + this.state.app_id + "&app_code=" + this.state.app_code + "&searchtext=" + end)
      .then(data => data.json())
      .then(data => {
        return {
          lat: data.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,
          long: data.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,
          address: data.Response.View[0].Result[0].Location.Address.Label,
        }
      })
  }

  render() {
    return (
      <div className="App">
      <Link to="/Filtro" className="vector"><img src="https://raw.githubusercontent.com/AnaPaulaMontap/hackathon-here/master/src/Componentes/camila/Vector.png" alt="vector"/></Link>
       <AddressItem
          getCoordinates={this.onAddressChange}
        />
        <Map
           app_id={this.state.app_id}
           app_code={this.state.app_code}
           lat={this.state.lat ? this.state.lat : "-33.4489"}
           lng={this.state.lng ? this.state.lng : "-70.6693"}
           zoom="12"
           theme={this.state.theme}
           startingPoint={this.state.startingPoint}
           endingPoint={this.state.endingPoint}
           marker={this.state.marker}
        />       

        <div>{this.state.lat ? this.state.lat : "nada"}</div>
        <div>{this.state.lng ? this.state.lng : "nada"}</div>
        <Footer/>
      </div>
    );
  }
}