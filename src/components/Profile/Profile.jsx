import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import store from "../../redux/redux-store";

const Profile = props => {
  //передать через пропсы в майпост нужные данные!!!

  return (
    <div>
      <HeaderProfile />
      {/*<MyPosts />*/}
      <MyPostsContainer
        posts={props.posts}
        addPost={props.addPost}
        store={store}
        newPostText={props.newPostText}
      />
    </div>
  );
};
export default Profile;

/*posts={props.posts} newPostText={props.newPostText}*/
