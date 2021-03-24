import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Discover from '../pages/Discover/Discover';
import Create from '../pages/Create/Create';
import Saved from '../pages/Saved/Saved';
import Profile from '../pages/Profile/Profile';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

function PrivateRoute ({component: Component, ...rest}) {
        console.log('routing from privateroute function - login status: ', localStorage.getItem('loggedin'));
        console.log('...rest', rest);
        return (
          <Route {...rest} render={(props) => (
                localStorage.getItem('loggedin') === 'true'
                ? <Component {...props} />
                : <Redirect to='/Login' />)}
          />
          )
      }


function AllRoutes(){
        /* all the route paths go here. */
        console.log('loggedin status in AllRoutes() function:', localStorage.getItem('loggedin'))
        
       return (
            <div>
                    <PrivateRoute exact path="/home" compondent={Home} />
                    <PrivateRoute exact path="/discover" component={Discover}/>
                    <PrivateRoute exact path="/create" component={Create}/>
                    <PrivateRoute exact path="/saved" component={Saved}/>
                    <PrivateRoute exact path="/profile" component={Profile}/>
            </div>
       )
}
// <Route exact path="/login" compondent={Login} />
export default AllRoutes;