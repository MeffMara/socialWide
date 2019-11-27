import React from "react";
import connect from "react-redux/lib/connect/connect";

import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    let copyState = state;
    return {
        posts:copyState.profilePage.postselements,
        newPostText:copyState.profilePage.newPostText
    }
}
let mapDispatchTooProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }

};

const MyPostsContainer = connect(mapStateToProps, mapDispatchTooProps)(MyPosts);


export default MyPostsContainer;
