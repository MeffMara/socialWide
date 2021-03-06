import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from './redux/redux-store';
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";



 let rerenderEntireTree = () => {
   render(
       <BrowserRouter>
           <Provider store={store}>
               <App/>
           </Provider>

       </BrowserRouter>,
       document.getElementById("root")
   )
};


rerenderEntireTree();


// addPost("I am a new post");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
