// import {renderEntireTree} from "../render";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postselements: [
        {
          id: 1,
          message: "My New`s One",
          likeCount: "10"
        },
        {
          id: 2,
          message: "My New`s Second",
          likeCount: "1"
        },
        {
          id: 3,
          message: "My New`s 3",
          likeCount: "12"
        }
      ],
      newPostText: "it-kamasutra.com"
    },
    messagePage: {
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
    },
    sidebar: {
      friendsBoard: [
        {
          name: "Arkadii",
          online: true,
          avatar:
            "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hypebot.com%2F.a%2F6a00d83451b36c69e201bb0876e9b9970d-600wi&f=1&nofb=1"
        },
        {
          name: "Dimich",
          online: false,
          avatar:
            "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmymodernmet.com%2Fwp%2Fwp-content%2Fuploads%2Farchive%2FrEqgUD5LXqnxjXB08ceW_1082054268.jpeg&f=1&nofb=1"
        },
        {
          name: "Nikola",
          online: true,
          avatar:
            "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.highsnobiety.com%2Fwp-content%2Fuploads%2F2015%2F06%2F10-biggest-hip-hop-stars-got-rap-names-main-480x320.jpg&f=1&nofb=1"
        }
      ]
    }
  },
  _callSubscriber() {
    console.log("State changed!");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
