import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<img
				src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Oji_Paper_logo.svg/200px-Oji_Paper_logo.svg.png"
				alt="logo"
			/>
		</header>
	);
};
export default Header;
