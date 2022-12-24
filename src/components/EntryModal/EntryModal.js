import React, { Component } from "react";
import "./EntryModal.css";

export default class EntryModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal" onClick={this.props.handleHideModal}>
        <div
          className="modal-content"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <span
            className="close"
            style={{ float: "right", cursor: "pointer" }}
            onClick={this.props.handleHideModal}
          >
            ×
          </span>
          <form>
            <label htmlFor="img">Image</label>
            <input
              className="input__form"
              type="text"
              value={this.props.avatar}
              onChange={this.props.handleChangeAvatar}
              placeholder="Image..."
            />
            <p>{this.props.validateimage}</p>
            <input
              type="submit"
              value={this.props.isCreateNew ? "Create" : "Submit"}
              onClick={(event) => {
              event.preventDefault();
              this.props.handleSubmitEntry();
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}
