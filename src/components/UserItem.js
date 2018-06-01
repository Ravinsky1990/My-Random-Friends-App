import React from "react";
import {Link} from "react-router-dom";

const UserItem =(props)=>{
    return(
        <figure className="listItem">
            <div className="user-img-wrap">
                <Link to={`/profile/${props.user.login.md5}`}>
                    <img src={props.user.picture.thumbnail}/>
                </Link>
            </div>
            <div className="user-caption">
                <span>{props.user.name.first.toUpperCase()}</span>
                <span>{props.user.name.last.toUpperCase()}</span>
                <span>{props.user.email}</span>
            </div>
        </figure>
    )
}

export default UserItem