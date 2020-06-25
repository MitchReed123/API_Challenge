import React, { Component } from "react";
import DisplayFetch from "./displayFetch/displayFetch";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      long: null,
      lat: null,
      key: "0d8d70d973e69d71a6025d7ec8506e15",
      description: "", //weather.description
      temp: null, // main.temp
      feels_like: null, // main.feels_like
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
        ).then((json) => {
          console.log(json.url);
          this.setState({
            description: json.url.description,
            temp: json.url.temp,
            feels_like: json.feels_like,
          });
          console.log(this.state.description);
          console.log(this.state.temp);
          console.log(this.state.feels_like);
        });
      });
    }
  }
  render() {
    return (
      <div>
        <h1>Weather</h1>
        <p>{this.state.temp}</p>
        <p>{this.state.description}</p>
        <p>{this.state.feels_like}</p>
      </div>
    );
  }
}
