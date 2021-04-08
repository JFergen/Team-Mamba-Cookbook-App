import React from 'react';
import { Route } from "react-router-dom";
import Discover from '../pages/Discover/Discover';
import Create from '../pages/Create/Create';
import Saved from '../pages/Saved/Saved';
import Profile from '../pages/Profile/Profile';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

function AllRoutes(){
        /* all the route paths go here. */
       return (
                <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/discover" component={Discover}/>
                        <Route exact path="/create" component={Create}/>
                        <Route exact path="/saved" component={Saved}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/login" component={Login}/>
                </div>
       )
}

export default AllRoutes;
