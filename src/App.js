import React, { Component } from "react";
import "./App.css";
import FetchAll from "./components/fetch/fetchAll";

class Display extends React.Component {
  // get coords here, pass them into each file
  render() {
    return (
      <div>
        <FetchAll />
      </div>
    );
  }
}

export default Display;
