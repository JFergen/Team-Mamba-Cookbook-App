import React from 'react';
import {Switch, Route} from "react-router-dom";
import Discover from '../pages/Discover/Discover';
import Create from '../pages/Create/Create';
import Saved from '../pages/Saved/Saved';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';

// cp,,emt
function AllRoutes(){
    return (
        /* all the route paths go here. */
        <Switch>
            <Route exact path="/discover" component={Discover}/>
            <Route exact path="/create" component={Create}/>
            <Route exact path="/saved" component={Saved}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" compondent={Login} />
        </Switch>
    )
}

export default AllRoutes;