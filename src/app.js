import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import UserFilter from "./components/UserFilter"
import UserList from "./components/UserList";
import AppRouter from "./routes/AppRouter";
import axios from 'axios';
import storeConfig from "./store/storeConfig";
//import {addUsers} from "./actions/addUsers";
import {startAddUsers} from "./actions/addUsers";
import LoadingPage from "./components/LoadingPage";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<LoadingPage/> , document.getElementById('app'))

//store
const store = storeConfig();

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<LoadingPage/> , document.getElementById('app'))

store.dispatch(startAddUsers()).then(()=>{
    ReactDOM.render(jsx , document.getElementById('app'))
})


/* axios.get("https://randomuser.me/api/?results=30").then((response)=>{
    store.dispatch(addUsers(response.data.results));
    ReactDOM.render(jsx , document.getElementById('app'))
    console.log(store.getState())  
}).catch((error)=>{
    console.log(error)
})
 */


