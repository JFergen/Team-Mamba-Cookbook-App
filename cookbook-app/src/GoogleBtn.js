
import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '503429243436-tmfnhmholf6frccbc0f41a3vp0rpo7hq.apps.googleusercontent.com';

class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) { // should maybe be moved to the login page it seems.
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
    }
    localStorage.setItem('loggedIn', true);
  }

  logout (response) { // should open login page
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    localStorage.setItem('loggedIn', false);
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
    localStorage.setItem('loggedIn', false);
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
    localStorage.setItem('loggedIn', true);
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          isSignedIn={ true }
        />
      }
    </div>
    )
  }
}

export default GoogleBtn;