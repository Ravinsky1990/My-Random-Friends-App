import React from "react";
import {connect} from "react-redux";
import {addPrevSearch} from "../actions/addPrevSearch";

class UserProfile extends React.Component{
    componentDidMount(){
        console.log("hi")
        this.props.setPrevSearch(this.props.user)
    }
    render(){
        return(
            <section>
                <div className="content-container">
                    <div className="Profile">
                        <div className="itemProfile">
                            <img src={this.props.user.picture.large}/>
                        </div>
                        <div className="captionWrap">
                            <div className="userName">
                                <h1>{this.props.user.name.first.toUpperCase()}</h1>
                                <h1>{this.props.user.name.last.toUpperCase()}</h1>
                            </div>
                            <div className="infomation">
                                <div className="infomation__type">Email</div>
                                <div className="infomation__value">{this.props.user.email}</div>
                            </div>
                            <div className="infomation">
                                <div className="infomation__type">Phone</div>
                                <div className="infomation__value">{this.props.user.phone}</div>
                            </div>
                            <div className="infomation">
                                <div className="infomation__type">Adress</div>
                                <div className="infomation__value">{this.props.user.location.city.toUpperCase()}</div>
                                <div className="infomation__value">{this.props.user.location.street.toUpperCase()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps =(state, props)=>{
    return{
        user: state.users.find((user)=>{
            return user.login.md5 === props.match.params.id
        })
    }
};
const mapDispatchToProps = (dispatch)=>{
    return{
        setPrevSearch:(userPrev)=>{
            dispatch(addPrevSearch(userPrev))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)

