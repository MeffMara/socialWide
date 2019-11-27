import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItems from "./DialogItems/DialogItems";
import SendMessages from "./SendMessages/SendMessages";
import Profile from "../Profile/Profile";
import SendMessagesContainer from "./SendMessages/SendMessagesContainer";

const Dialogs = props => {

  let dialogElements = props.dialogsName.map((dialog, idx) => (
    <DialogItems
      name={dialog.name}
      id={dialog.id}
      status={dialog.status}
      key={idx}
    />
  ));
  let messageElements = props.messages.map((message, idx) => (
    <Message message={message.message} key={idx} />
  ));

  return (
    <div className={classes.dialogsWrapper}>
      <span>Message</span>
      <div className={classes.dialogs}>{dialogElements}</div>
      <div className={classes.messages}>{messageElements}</div>

      <SendMessagesContainer store={props.store}/>
    </div>
  );
};
export default Dialogs;
