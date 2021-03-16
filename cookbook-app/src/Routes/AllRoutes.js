import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Discover from '../pages/Discover/Discover';
import Create from '../pages/Create/Create';
import Saved from '../pages/Saved/Saved';
import Profile from '../pages/Profile/Profile';
import Home from '../pages/Home/Home';
//import Login from '../pages/Login/Login';

let not_signed_in = false; 
function PrivateRoute ({component: Component, ...rest}) {
        console.log('private route');
        return (
          <Route {...rest} render={(props) => (
                localStorage.getItem('loggedin') === 'true'
                ? <Component {...props} />
                : <Redirect to='/Login' />)}
          />
          )
      }
//<Redirect to='/Login' />

function AllRoutes(){
        /* all the route paths go here. */
        console.log('loggedin status in AllRoutes() function:', localStorage.getItem('loggedin'))
        not_signed_in = false;
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
// <PrivateRoute exact path="/" name="Home" render={props => <SomeSecuredComponent {...props} />} />
// <Route exact path="/login" compondent={Login} />
export default AllRoutes;