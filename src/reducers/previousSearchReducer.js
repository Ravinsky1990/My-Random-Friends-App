const previousSearchReducer_Default = [];

export default (state = previousSearchReducer_Default, action) => {
    switch (action.type) {
        case "ADD_LAST_SEARCH":
            if(state.length === 0){
                return[
                    action.userPrev
                ]
            }else if(!!state.find((user)=>user.login.md5===action.userPrev.login.md5)) {
                return[
                    ...state
                    
                ]
            }else{
                return[
                    ...state,
                    action.userPrev
                ]
            }
        default:
            return state;
    }
}