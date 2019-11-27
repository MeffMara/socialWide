import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/message-reducer";
import SendMessages from "./SendMessages";
import {connect} from "react-redux";

// const SendMessagesContainer = props => {
//   let value = props.store.getState().messagePage.newMessageBody;
//
//   const sendMessageHandler = () => {
//     props.store.dispatch(sendMessageActionCreator())
//   };
//
//   const onNewMessageChange = (newMessageBody) => {
//       props.store.dispatch(updateNewMessageBodyActionCreator(newMessageBody))
//   };
//
//   // let newMessageBody;
//   return (
//    <SendMessages newMessageBody={value}
//                  sendMessage={sendMessageHandler}
//                  updateNewMessageBody={onNewMessageChange}/>
//   );
// };


let mapStateToProps = (state)=>{
  return {
    messagePage:state.messagePage,
    newMessageBody:state.messagePage.newMessageBody
  }
}

let mapDispatchToProps = (dispatch)=>{
  return {
    updateNewMessageBody:(newMessageBody)=>{
      return(
          dispatch(updateNewMessageBodyActionCreator(newMessageBody))

      )
    },
  sendMessage:()=>{
      return(
          dispatch(sendMessageActionCreator())

      )
  },
  }
}

const SendMessagesContainer = connect(mapStateToProps,mapDispatchToProps)(SendMessages);



export default SendMessagesContainer;
