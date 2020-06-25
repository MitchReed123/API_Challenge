import React, { Component } from "react";
import "./App.css";
import NASAPic from "./components/fetch/NASAPic";
import Weather from "./components/fetch/weather";
class Display extends React.Component {
  // get coords here, pass them into each file
  render() {
    return (
      <div>
        <NASAPic />
        <Weather />
      </div>
    );
  }
}

export default Display;
