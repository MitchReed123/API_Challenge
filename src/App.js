import React, { Component } from "react";
import "./App.css";
import NASAPic from "./components/fetch/NASAPic";
import Weather from "./components/fetch/weather";
import Zomato from "./components/fetch/Zomato";
class Display extends React.Component {
  // get coords here, pass them into each file
  render() {
    return (
      <div>
        <NASAPic />
        <Weather />
        <Zomato />
      </div>
    );
  }
}

export default Display;
