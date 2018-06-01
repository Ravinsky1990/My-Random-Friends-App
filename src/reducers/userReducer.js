const userReducerDefaultState = [];

export default (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USERS':
             return [
                ...action.users
             ];
        default:
            return state;
    }
}