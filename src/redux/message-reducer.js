const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {

    dialog1: [
      { id: "1", name: "Arrkadii", status: "online" },
      { id: "2", name: "Katerina", status: "ofline" },
      { id: "3", name: "Vladimir", status: "ofline" },
      { id: "4", name: "Valera", status: "ofline" },
      { id: "5", name: "Jeka", status: "online" }
    ],
    message1: [
      { id: 1, message: "Arrkadii! How are you?" },
      { id: 2, message: "Hi! Baby!" },
      { id: 3, message: "Call me now!!!Gector" },
      { id: 4, message: "Please, trust me!" },
      { id: 5, message: "Hello!" }
    ],
    newMessageBody: ""

}

const messageReducer = (state=initialState, action) => {
  switch (action.type) {


    case SEND_MESSAGE:
      {
        let copyState = {...state};
        let body = copyState.newMessageBody;

        copyState.message1=[...state.message1];
        // copyState.messagePage.newMessageBody=[...state.messagePage.newMessageBody];
        copyState.message1.push({ id: 6, message: body });
        copyState.newMessageBody='';
        return copyState
      }
    case UPDATE_NEW_MESSAGE_BODY:{
      let copyState = {...state};

      copyState.newMessageBody = action.body;

      return copyState;}
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};
export const updateNewMessageBodyActionCreator = body => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
};

export default messageReducer;
