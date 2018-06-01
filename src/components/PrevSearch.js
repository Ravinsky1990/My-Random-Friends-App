import React from "react";
import UserItem from "./UserItem";
import {connect} from "react-redux";

const PrevSearch = (props)=>{
    return(
        <section>
            <div className="content-container">
                <div className="user-item-wrap">
                {
                    props.users.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No users prev search</span>
                        </div>
                    ) : (
                        props.users.map((user)=>{
                            return <UserItem key={user.login.md5} user={user} />
                        })
                    )
                }
                </div>
            </div>
        </section>
    )
}

const mapStateToProps =(state)=>{
    return{
        users:state.PreviousSearch
    }
}

export default connect(mapStateToProps)(PrevSearch)