import React from "react";
import {connect} from "react-redux";
import {setTextFilter} from "../actions/filters";


class UserFilter extends React.Component{
    onTextChange = (ev)=>{
        let value = ev.target.value
        this.props.setFilters(value)
    }
    render(){
        return(
            <div className="line">
                <div className="content-container">
                    <div className="input-group">
                        <input placeholder="Search friends" className="text-input"
                        value={this.props.filters.text}
                        type="text"
                        onChange={this.onTextChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        filters:state.filters
    }
}

const mapDispatchToProps = (dispatch)=>({
    setFilters:(text)=>{
        return dispatch(setTextFilter(text))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserFilter)