import React from "react";
import classes from "./FriendBoard.module.css";
import Friend from "./Friend/Friend";

const FriendBoard = props => {
  let friends = props.friendsBoard.map((friend, idx) => (
    <Friend
      name={friend.name}
      online={friend.online}
      avatar={friend.avatar}
      key={idx}
    />
  ));

  return (
    <div className={classes.container}>
      <div className={classes.title}>Friend Online:</div>
      <div className={classes.containerWrapper}>{friends}</div>
    </div>
  );
};
export default FriendBoard;
