import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend, updateFriend } from "../actions";

class FriendForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
      index: ""
    };
  }

  handleNameInput = event => {
    this.setState({ name: event.target.value });
  };

  handleAgeInput = event => {
    this.setState({ age: event.target.value });
  };

  handleEmailInput = event => {
    this.setState({ email: event.target.value });
  };

  handleIndexInput = event => {
    this.setState({ index: event.target.value });
  };

  handleUpdate = event => {
    event.preventDefault();
    if (!this.state.index) return;
    const friend = {
      index: this.state.index,
      update: {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      }
    };
    this.props.updateFriend(friend);
    this.setState({
      name: "",
      age: "",
      email: "",
      index: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !this.state.name.trim() ||
      !this.state.age.trim() ||
      !this.state.email.trim()
    )
      return;
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.addFriend(friend);
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameInput}
            placeholder="Name"
          />
          <input
            type="number"
            value={this.state.age}
            onChange={this.handleAgeInput}
            placeholder="Age"
          />
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailInput}
            placeholder="Email"
          />
          <input
            type="text"
            value={this.state.index}
            onChange={this.handleIndexInput}
            placeholder="Index"
          />
          <button>Add Friend</button>
          <button onClick={this.handleUpdate}>Update Friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      friends: state.friends
  };
};

export default connect(mapStateToProps, { addFriend, updateFriend })(
  FriendForm
);
