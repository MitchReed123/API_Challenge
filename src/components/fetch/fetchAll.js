import React, { Component } from "react";
import DisplayFetch from "./displayFetch/displayFetch";

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }

  componentWillMount() {
    console.log("im about to mount");
  }

  componentDidMount() {
    console.log("Component Mounted");

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      const userLat = position.coords.latitude;
      console.log("Longitude is :", position.coords.longitude);
      const userLong = position.coords.longitude;

      const BaseUrl = "https://api.nasa.gov/planetary/earth/imagery";
      const API_KEY = "lxRlU7CCcAdZc3G7vujBbp08TPzdV4m6s0Aknh7K";

      fetch(
        `${BaseUrl}?lon=${userLong}&lat=${userLat}&date=2014-02-01&api_key=${API_KEY}`
      )
        // .then((res) => res.json())
        // .then((json) => {
        //   console.log(json.url);
        //   this.setState({
        //     img: json.url,
        //   });
        // });
        .then(function (result) {
          console.log(result);
          console.log(result.url);
          this.setState({
            img: result.url,
          });
        });
    });
  }

  render() {
    return (
      <div>
        <h1>User Location</h1>
        <DisplayFetch url={this.state.img} />
      </div>
    );
  }
}
