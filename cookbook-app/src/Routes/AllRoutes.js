import React from 'react';
import { Route } from "react-router-dom";
import Discover from '../pages/Discover/Discover';
import Create from '../pages/Create/Create';
import Saved from '../pages/Saved/Saved';
import Profile from '../pages/Profile/Profile';
import Home from '../pages/Home/Home';



function AllRoutes(){
        /* all the route paths go here. */
        console.log('loggedin status:', localStorage.getItem('loggedin'))
        

                        // part of redirect if logged out function - this would bring user to the login page if they're not logged in.
                        // it's commented out because redirect doesn't seem to render the page that it's supposed to redirect to.
                        // that's the bug trying to fix.


       //if (localStorage.getItem('loggedin') === true) {
       // console.log('div tags with all the falsehoods.')
       return (
            <div>
                    <Route exact path="/home" compondent={Home} />
                    <Route exact path="/discover" component={Discover}/>
                    <Route exact path="/create" component={Create}/>
                    <Route exact path="/saved" component={Saved}/>
                    <Route exact path="/profile" component={Profile}/>
                
            </div>
       )
                // functionality for redirecting to login page. React has some issue with redirect though.
                // need to either implement history, or figure out a workaround for the bug.
                // Maybe should focus on History
    //} else {
    //console.log('redirecting to login page')
    //return(
    //   <div><Redirect to="/login" component={Login}/></div>
    //)}
}
// <Route exact path="/login" compondent={Login} />
export default AllRoutes;