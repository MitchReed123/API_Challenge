import React, { Component } from "react";

const DisplayFetch = (props) => {
  return (
    <div>
      <img
        src={props.url}
        alt="test"
        style={{ width: "250px", height: "250px" }}
      />
    </div>
  );
};

export default DisplayFetch;
