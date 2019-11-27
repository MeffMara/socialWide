import React from "react";
import classes from "./SendMessages.module.css";

const SendMessages = props => {

  const sendMessageHandler = () => {
      props.sendMessage();
  };

  const onNewMessageChange = (e) => {
      let newMessageBody = e.target.value;
      props.updateNewMessageBody(newMessageBody);
  };

  // let newMessageBody;
  return (
    <div className={classes.sendMessages}>
      <label>
        {" "}
        Send Messages:
        <textarea
          onChange={onNewMessageChange}
          value={props.newMessageBody}
          placeholder="Enter Your Message"
        />
      </label>
      <button onClick={sendMessageHandler}>Send</button>
    </div>
  );
};

export default SendMessages;
