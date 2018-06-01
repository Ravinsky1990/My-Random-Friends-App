import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import filterReducer from "../reducers/filterReducer";
import userReducer from "../reducers/userReducer";
import previousSearchReducer from "../reducers/previousSearchReducer";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default ()=>{
    const store = createStore(
        combineReducers({
            users: userReducer,
            filters: filterReducer,
            PreviousSearch: previousSearchReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}