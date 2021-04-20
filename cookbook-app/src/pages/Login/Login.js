import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../store/actions/user_actions';
import { Redirect } from "react-router-dom";
import GoogleBtn from '../../components/GoogleBtn'

class Login extends Component {
    render() {
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
    }
}

const mapStateToProps = (state) => ({
    user: state.usrReducer.user
})

export default connect(mapStateToProps, { setUser })(Login);
