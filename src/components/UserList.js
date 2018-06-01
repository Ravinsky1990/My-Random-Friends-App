import React from "react";
import UserItem from "./UserItem"
import {connect} from "react-redux";
import UserSelector from "../selectors/selector";
import {addPrevSearch} from "../actions/addPrevSearch";

class UserList extends React.Component{
    componentDidUpdate(){
        console.log("appdate")
        console.log(this.props.users)
    }
    render(){
        return(
            <section>
                <div className="content-container">
                    <div className="user-item-wrap">
                    {
                        this.props.users.length === 0 ? (
                            <div className="list-item list-item--message">
                                <span>No users</span>
                            </div>
                        ) : (
                            this.props.users.map((user)=>{
                                return <UserItem key={user.login.md5} user={user} />
                            })
                        )
                    }
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        users: UserSelector(state.users, state.filters)
    }
};

export default connect(mapStateToProps,)(UserList)
