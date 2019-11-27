import React from "react";

import classes from "./Users.module.css";
import userPhoto from '../../assets/images/Blank_user.svg.png'


const Users = (props) => {

    let pageCount = Math.ceil(props.totalCounts / props.pageSize);
    let pages = [];
    for(let i = 1;i<= pageCount;i++){
        pages.push(i)
    }

    return(

        <div>
            <div>
                {pages.map((p)=>{
                    return (<span className={props.currentCount===p && classes.selectedPage}
                                  onClick={(e)=>{
                                      props.onPageChanged(p)
                                  }}
                    >{p}</span>)
                })}
            </div>
            {props.users.map(u => (
                <div key={u.id} className={classes.itemFollowers}>
                    <div className={classes.followerDiv}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={"avatar - " + u.id} />
                        {u.followed ? (
                            <button
                                onClick={() => {
                                    props.unfollow(u.id);
                                }}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    props.follow(u.id);
                                }}
                            >
                                Follow
                            </button>
                        )}
                    </div>
                    <div className={classes.followerInformation}>
                        <div className={classes.name}>{u.name}</div>
                        <div className={classes.status}>{u.status}</div>
                        <div className={classes.locationCity}>{"u.location.city"}</div>
                        <div className={classes.locationCountry}>{"u.location.country"}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}




    export default Users;
