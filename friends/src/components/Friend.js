import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteFriend } from "../actions";

class Friend extends Component {

  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteFriend(this.props.index);
  }

  render() {
    return (
      <div className="Friend">
        <div>{`Friend id: ${this.props.index}`}</div>
        <div>{this.props.friend.name}</div>
        <div>{this.props.friend.age}</div>
        <div>{this.props.friend.email}</div>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default connect(null, { deleteFriend })(Friend);