import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveFriends } from "../actions";
import Friend from "./Friend";
import "./FriendList.css";

class FriendsList extends Component {
  componentDidMount() {
      this.props.retrieveFriends();
  }

  render() {
    return (
      <div className="FriendList">
        {this.props.friends.map((friend, i) => (
          <Friend key={i} index={i} friend={friend}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      friends: state.friends
  };
};

export default connect(mapStateToProps, { retrieveFriends })(FriendsList);