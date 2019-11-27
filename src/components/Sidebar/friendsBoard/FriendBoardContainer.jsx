import React from "react";
import FriendBoard from "./FriendBoard";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    friendsBoard: state.sidebar.friendsBoard
  };
};

const FriendBoardContainer = connect(mapStateToProps)(FriendBoard);
export default FriendBoardContainer;
