import React from 'react';
import { GoogleLogout } from 'react-google-login';

const CLIENT_ID = '503429243436-tmfnhmholf6frccbc0f41a3vp0rpo7hq.apps.googleusercontent.com';


class Logout extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false
    }
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess(){
    console.log('Logout sucess');

    this.setState({
      isSignedIn: false
    })

    localStorage.setItem('loggedin', false);

    //this.props.history.push("/Login"); This doesn't seem to work.

        //---------------------------------
        //redirect to login page here
        //---------------------------------
  };
  
  render(){
    return (
    <div>
      
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={this.onSuccess}
        ></GoogleLogout>
        
    </div>
    )
  }
}

export default Logout;