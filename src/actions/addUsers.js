import axios from "axios"

//Add Users

export const addUsers = (users)=>{
    return{
        type: "ADD_USERS",
        users
    }
}
// Async
export const startAddUsers = ()=>{
    return (dispatch)=>{
        return axios.get("https://randomuser.me/api/?results=30").then((response)=>{
            dispatch(addUsers(response.data.results));
        }).catch((error)=>{
            console.log(error)
        })
    }
}