import React from 'react';
import classes from './DialogItems.module.css';
import {NavLink} from "react-router-dom";


const DialogItems = ( props ) => {

    let path = "/dialogs/" + props.id;
    const status = props.status;

    if(status==='online'){
        return (
            <div className={classes.dialog}>
                <NavLink className={classes.online} to={path}> {props.name} </NavLink>
            </div>
        )
    }
    return (
        <div className={classes.dialog}>
            <NavLink className={classes.ofline} to={path}> {props.name} </NavLink>
        </div>
    )
}


export default DialogItems;