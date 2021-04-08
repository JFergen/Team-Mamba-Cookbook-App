import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../store/actions/user_actions';
import { Redirect } from "react-router-dom";
import GoogleBtn from '../../components/GoogleBtn'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignedIn: false,
            accessToken: ''
        };

        this.onSuccess = this.onSuccess.bind(this);
    };

    /*

    no idea how this works, but it does.

    For some reason, it will only properly update the state and load the correct page if the state is modified.
    Also only way to communicate with rest of program is by changing localstorage. So have to modify both.

    */

    onSuccess(response){
        if(response.accessToken){
            this.setState({
              isSignedIn: true,
              accessToken: response.accessToken
            });
        }

        console.log('[Login Success] currentUser: ', response);
            //sets state in class to issignedin
        if(response.accessToken){
            this.setState({
              isSignedIn: true,
              accessToken: response.accessToken
            });
          }
            //sets local storage to loggedin
        localStorage.setItem('loggedin', 'true');
            
        this.props.setUser(response.profileObj);  // Save user's profile in redux
        DatabaseDriver.login(response.profileObj);  // Add user to the database
      };


      onFailure(){
        console.log('[login failed] res: ', this);
      };


    getContent(){

            
            // for some reason, the way this code runs, this cannot reference local storage to work. I think it updates in an odd way.
        if(this.state.isSignedIn) { //changes screen if logged in.
            return (<Redirect to='/' />)
        }
        else { // returns loggin screen if not logged in
            return (
            <div>
                <h1>Login through Google below!</h1>
                <div>

                    <GoogleBtn />
                </div>
            </div>
            )
        }
    }
    /*<div>

                    <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                        cookiePolicy={'single_host_origin'}
                        //responseType='code,token'
                        style={{ marginTop: '100px' }}
                        isSignedIn={true}
                    />
                </div> */

    render() { //just calls get content
        return (
            <div className="center">
                {this.props.user ?
                    <Redirect to="/"/>:
                    <div>
                        <h1>Login through Google below!</h1>
                        <GoogleBtn/>
                    </div>
                }
            </div>
        )
    };
}

const mapStateToProps = (state) => ({
    user: state.usrReducer.user
})

export default connect(mapStateToProps, { setUser })(Login);
