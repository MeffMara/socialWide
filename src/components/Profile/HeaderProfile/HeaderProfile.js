import React from 'react';
import classes from "./HeaderProfile.module.css";

const HeaderProfile = ()=> {
        return (
            <div className={classes.topContent}>
                <div className={classes.topImage}>
                    <img src="https://cdn.wallpapersafari.com/64/93/gH9reb.jpg" alt="" />
                </div>
                <div className={classes.contact}>
                    <img
                        src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcde.peru.com%2Fima%2F0%2F0%2F7%2F9%2F1%2F791319%2F628x353%2Fjack-nicholson.jpg&f=1&nofb=1"
                        alt="avatar"
                    />
                    <div className={classes.information}>
                        <span>Name</span>
                        <h6>Jhon Smith</h6>
                        <span>date of bith</span>
                        <h6>03.11.1973</h6>
                    </div>
                </div>
            </div>
        );
}

export default HeaderProfile;