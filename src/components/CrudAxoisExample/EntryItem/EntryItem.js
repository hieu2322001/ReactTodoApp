import React from "react";
import "./EntryItem.css";

export default class EntryItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="card"
        onClick={() => {
          this.props.handleShowModal();
          this.props.handleClickEntryItem();
        }}
      >
        <img
          onClick={(event) => {
            event.stopPropagation();
            this.props.handleClick();
          }}
          src="https://i.stack.imgur.com/k59em.png"
          alt=""
          className="dots"
        />
        <img src={this.props.avatar} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect &amp; Engineer</p>
        </div>
      </div>
    );
  }
}
