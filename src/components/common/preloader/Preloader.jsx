import React from 'react';
import classes from "../../Users/Users.module.css";
import loader from "../../../assets/images/745.gif";


const Preloader = () => {
    return(
        <img className={classes.isFetching} src={loader} />
    )
};

export default Preloader;