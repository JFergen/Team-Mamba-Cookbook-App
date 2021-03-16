import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import Create from '../Create/Create';
import { Redirect } from "react-router-dom";
import DatabaseDriver from '../../database/DatabaseDriver';
import { setUser } from '../../store/actions/user_actions';


const CLIENT_ID = '503429243436-tmfnhmholf6frccbc0f41a3vp0rpo7hq.apps.googleusercontent.com';

class Login extends Component {

    constructor(props) {
        super(props)
    };

    /*
    no idea how this works, but it does.
    For some reason, it will only properly update the state and load the correct page if the state is modified.
    Also only way to communicate with rest of program is by changing localstorage. So have to modify both.
    */

    onSuccess(response){
        console.log('[Login Success] currentUser: ', response);

        localStorage.setItem('loggedin', 'true');
        console.log('i set item');
        //this.props.setUser(response.profileObj);  // Save user's profile in redux
        //DatabaseDriver.addUser(response.profileObj);  // Add user to the database
      };


      onFailure(){
        console.log('[login failed] res: ', this);
      };


    getContent(){
        console.log('getting content - in content');
            // for some reason, the way this code runs, this cannot reference local storage to work. I think it updates in an odd way.
        //if(this.state.isSignedIn) { //changes screen if logged in.
        //    return (<Redirect to='/create' />)
        //}
        if(localStorage.getItem('loggedin') === 'true'){
            return (<Redirect to='/create' />)
        }
        else { // returns loggin screen if not logged in
            console.log('in getcontent else statement');
            return (
            <div>
                <h1>Login through Google below!</h1>
                <div>
                    <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                        cookiePolicy={'single_host_origin'}
                        style={{ marginTop: '100px' }}
                        isSignedIn={true}
                    />
                </div>
            </div>
            )
        }
    }


    render() { //just calls get content
        console.log('getting content');
        return (
            <div className="center">
                {this.getContent()}
            </div>
        )
    };

//    mapStateToProps(state) {
//        return { todos: state.todos }
 //     }

}

export default Login;