import React, { Component } from "react";


export default class Header extends Component {
  render() {
    return (
      <div
        className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center"
        style={{ opacity: 0.8 }}
      >
        <h2 className="navbar-brand ">Try Class App Online</h2>
      </div>
    );
  }
}
