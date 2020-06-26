import React, { Component } from "react";
import "./App.css";

// import styling components
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

import NASAPic from "./components/fetch/NASAPic";
import Weather from "./components/fetch/weather";
import Zomato from "./components/fetch/Zomato";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;   
`;

const Background = styled.div`
    width: 80%;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 60px;
    margin-right: 40px;
`;




class Display extends React.Component {
  // get coords here, pass them into each file
  render() {
    return (
      <Background>
        <Row id="NASA">
          <NASAPic />
        </Row>
        <Row>
          <Column id="weather">
            <Weather />
          </Column>
          <Column id="zomato">
            <Zomato />
          </Column>
        </Row>
      </Background>
    );
  }
}

export default Display;
