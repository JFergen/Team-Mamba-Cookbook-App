import React, { Component } from 'react'
import GoogleBtn from '../../GoogleBtn';

class Login extends Component {
    render() {
        return (
            <div className="center">
                <h1>Login through Google bellow!</h1>
                <GoogleBtn/>
            </div>
        )
    }
}

export default Login;