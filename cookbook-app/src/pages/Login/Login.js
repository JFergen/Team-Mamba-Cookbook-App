import React, { Component } from 'react'
import GoogleBtn from '../../components/GoogleBtn';

class Login extends Component {
    render() {
        return (
            <div className="center">
                <h1>Welcome to the Login Screen!</h1>
                <GoogleBtn/>
            </div>
        )
    }
}

export default Login;