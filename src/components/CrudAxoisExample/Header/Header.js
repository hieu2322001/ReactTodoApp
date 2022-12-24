import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="topnav">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>

        <div className="head_container">
          <h2>List Entries</h2>
          <button
            className="btn-new-entries"
            id="myBtn"
            onClick={this.props.handleShowModal}
          >
            Create new Entry +
          </button>
        </div>
      </header>
    );
  }
}
