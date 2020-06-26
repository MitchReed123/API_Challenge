import React, { Component } from "react";
import DisplayFetch from "./displayFetch/displayFetch";
import Cloud from '../../assests/cloud.png';

// import styling components
// import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/icons';
import styled from 'styled-components'

const Resize = styled.img`
    margin-right: 20px;
    margin-top: 10px;
`;


export default class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      long: null,
      lat: null,
      key: "0d8d70d973e69d71a6025d7ec8506e15",
      description: null, //weather.description
      temp: null, // main.temp
      feels_like: null, // main.feels_like
      Temperature: true,
    };
  }

  componentWillMount() {
    console.log("Will se something happen");
  }

  componentDidMount(props) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          long: position.coords.longitude,
          lat: position.coords.latitude,
        });
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=${this.state.key}`
        )
          .then((results) => {
            return results.json();
          })
          .then((json) => {
            getResults(json);
          })
          .catch(console.log);
      });
    }
    let getResults = (json) => {
      let Temps = json.main.temp;
      let tempVa = ((Temps - 273.15) * 9) / 5 + 32;
      tempVa = Math.round(tempVa);
      let feel = json.main.feels_like;
      let newFeel = ((feel - 273.15) * 9) / 5 + 32;
      newFeel = Math.round(newFeel);
      this.setState({
        temp: tempVa,
        feels_like: newFeel,
        description: json.weather[0].description,
      });
    };
  }
  render() {
    return (
      <div>
        <h1><Resize src={Cloud} />Local Weather </h1> 
        <p>Temp: {this.state.temp}</p>
        <p>Feels like: {this.state.feels_like}</p>
        <p>Current weather: {this.state.description}</p>
      </div>
    );
  }
}
