import React from 'react';
import { GoogleLogout } from 'react-google-login';

const CLIENT_ID = '503429243436-tmfnhmholf6frccbc0f41a3vp0rpo7hq.apps.googleusercontent.com';


class Logout extends React.Component{
  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess(){
    console.log('Logout sucess');

    localStorage.setItem('loggedin', 'false');
    
      // just rerenders the page by adjusting the state
      window.location.reload(false);


    //re render page, logining out
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