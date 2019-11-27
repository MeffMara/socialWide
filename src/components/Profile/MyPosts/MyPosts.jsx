import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {

  let myPosts = props.posts.map((post, idx) => (
      <Post
          title={post.title}
          message={post.message}
          likeCount={post.likeCount}
          key={idx}
      />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);

  };

  return (
    <div className={classes.myPosts}>
      <h2>My Posts</h2>
      <div className={classes.form}>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          cols="60"
          rows="3"
        />
        <button onClick={onAddPost}>Add Post</button>
      </div>
      {myPosts}
    </div>
  );
};
export default MyPosts;
