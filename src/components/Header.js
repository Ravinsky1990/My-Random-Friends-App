import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


const Header = (props)=>{
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/"><h1>My Friends</h1></Link>
                    <div>
                        <div className="header__friends">All friends: <span>{props.users.length}</span></div>
                        <Link className="header__prev" to="/prevsearch">Previous Search </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps =(state)=>{
    return{
        users: state.users
    }
}

export default connect(mapStateToProps)(Header)
