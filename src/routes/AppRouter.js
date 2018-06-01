import React from "react";
import {BrowserRouter, Route, Router} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "../components/Header";
import PrevSearch from "../components/PrevSearch";
import UserFilter from "../components/UserFilter";
import UserList from "../components/UserList";
import UserProfile from "../components/UserProfile";

const history = createHistory()

const AppRouter = ()=>{
    return (
        <Router history={history}>
            <div>
                <Header/>
                <Route path="/" exact={true} component={UserFilter}/>
                <Route path="/" exact={true} component={UserList}/>
                <Route path="/prevsearch" component={PrevSearch}/>
                <Route path="/profile/:id" component={UserProfile}/>
            </div>
        </Router>
    )
}

export default AppRouter
