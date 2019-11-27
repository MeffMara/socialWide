import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	let title = props.title;
	let message = props.message;
	let likeCount = props.likeCount;

	return (
		<div className={classes.post}>
			<img
				src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fblackbiz.club%2Fdata%2Favatars%2Fl%2F143%2F143195.jpg%3F1541845309&f=1&nofb=1"
				alt="jhon"
			/>
			<header>
				<h3>{title}</h3>
			</header>
			<p className={classes.description}>{message}</p>
			<span>
				like <i>{likeCount}</i>
			</span>
		</div>
	);
};
export default Post;
