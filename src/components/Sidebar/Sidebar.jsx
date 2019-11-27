import React from 'react';
import classes from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import FriendBoard from "./friendsBoard/FriendBoard";
import FriendBoardContainer from "./friendsBoard/FriendBoardContainer";

const Sidebar = (props) => {
	console.log(props);
	return (
		<div className={classes.sidebar}>
			<nav className={classes.navbar}>
				<ul className={classes.menulists}>
					<li className={classes.menulist}>
						<NavLink to="profile" activeClassName={classes.active}>Profile</NavLink>
					</li>
					<li>
						<NavLink to="dialogs" activeClassName={classes.active}>Dialogs</NavLink>
					</li>
					<li>
						<NavLink to="news" activeClassName={classes.active}>News</NavLink>
					</li>
					<li>
						<NavLink to="music" activeClassName={classes.active}>Music</NavLink>
					</li>
					<li>
						<NavLink to="settings" activeClassName={classes.active}>Settings</NavLink>
					</li>
					<li>
						<NavLink to="users" activeClassName={classes.active}>Users</NavLink>
					</li>
				</ul>
			</nav>
			<FriendBoardContainer/>
			{/*<FriendBoard />*/}
		</div>
	);
};
export default Sidebar;
