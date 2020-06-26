import React, { Component } from "react";
//import './app.css';

import Restaurant from '../../assests/restaurant.png';

// import styling components
// import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/icons';
import styled from 'styled-components'

const Resize = styled.img`
   
    margin-top: 5px;
    width: 60px;
    height: 60px;
`;



export default class Zomato extends Component {


  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null,
      nearby_restaurants1: null,
    };
  }
  componentDidMount = (props) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        fetch(
          `https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.lat}&lon=${this.state.lon}`,
          {
            headers: new Headers({
              "user-key": "22d11862105cea0bcb8b760d41f99d1d",
            }),
          }
        )
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            this.setState({
              nearby_restaurants: json.nearby_restaurants[0].restaurant.name,
              nearby_restaurants1: json.nearby_restaurants[1].restaurant.name,
              nearby_restaurants2: json.nearby_restaurants[2].restaurant.name,
              nearby_restaurants3: json.nearby_restaurants[3].restaurant.name,
              nearby_restaurants4: json.nearby_restaurants[4].restaurant.name,
              nearby_restaurants5: json.nearby_restaurants[5].restaurant.name,
              nearby_restaurants6: json.nearby_restaurants[6].restaurant.name,
              nearby_restaurants7: json.nearby_restaurants[7].restaurant.name,
              nearby_restaurants8: json.nearby_restaurants[8].restaurant.name,
            });
            // console.log(this.state.nearby_restaurants[0]);
            console.log(this.state.nearby_restaurants);
          });
      });
    }
  };
  render() {
    return (
      <div>
        <h1> <Resize src={Restaurant} />Local Restaurants</h1>
        <ul>
          <li>{this.state.nearby_restaurants}</li>
          <li>{this.state.nearby_restaurants1}</li>
          <li>{this.state.nearby_restaurants2}</li>
          <li>{this.state.nearby_restaurants3}</li>
          <li>{this.state.nearby_restaurants4}</li>
          <li>{this.state.nearby_restaurants5}</li>
          <li>{this.state.nearby_restaurants6}</li>
          <li>{this.state.nearby_restaurants7}</li>
          <li>{this.state.nearby_restaurants8}</li>
        </ul>
      </div>
    );
  }
}

// Collapse;
