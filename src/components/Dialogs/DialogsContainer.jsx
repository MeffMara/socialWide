import React from "react";

import Dialogs from "./Dialogs";

import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsName: state.messagePage.dialog1,
    messages: state.messagePage.message1
    // state:state
  };
};
let mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
