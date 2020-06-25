import React, { Component } from "react";
import DisplayFetch from "./displayFetch/displayFetch";

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      long: null,
      lat: null,
      key: "lxRlU7CCcAdZc3G7vujBbp08TPzdV4m6s0Aknh7K",
      img: "",
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
          `https://api.nasa.gov/planetary/earth/imagery?lon=${this.state.long}&lat=${this.state.lat}&api_key=${this.state.key}`
        ).then((json) => {
          console.log(json);
          this.setState({
            img: json.url,
          });
          console.log(this.state.img);
        });
      });
    }
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <img
          src={this.state.img}
          alt="test"
          style={{ width: "250px", height: "250px" }}
        />
      </div>
    );
  }
}
