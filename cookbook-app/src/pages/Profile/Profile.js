import React, { Component } from 'react'
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import CardComponent from'../../components/card';
import { connect } from 'react-redux';
import './Profile.css';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            recipes: [],
            user: null
        }
    
        this.getRecipes = this.getRecipes.bind(this);
        this.renderItem = this.renderItem.bind(this);
        
    }
    componentDidUpdate() {
        if (this.state.user !== this.props.user) {
            this.setState({ user: this.props.user }, () => {
                this.getRecipes();
            }) 
        }
    }


    async getRecipes() {
        const data = await DatabaseDriver.getUsersRecipes(this.state.user.googleId);    // Gets recipes from a user
        this.setState({ recipes: data })
    }

    renderItem(index, key) {
        return (
            <div key={key}>
                <CardComponent 
                    recipe={this.state.recipes[index]}
                    user={this.props.user}
                />                 
            </div>

        )
    }


    render() {
        return (
        <div>
            <div>
                <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        margin:"25px 300px"
                    }}>
                    <div>
                        <img style={{width: "200px", height:"200px", borderRadius:"110px"}}
                        src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                        />
                    </div>
                    <div>
                        <h1>this.props.user.name</h1>
                        <div style={{display:"flex", justifyContent:"space-between", width:"90%"}}>
                            <h5>Following</h5>
                            <h5>Followers</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="list">
                    <h1>{this.props.user.googleId}</h1>
                    <ReactList
                        itemRenderer={this.renderItem}
                        length='6'
                        type='uniform'
                    />
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.usrReducer.user
})

export default connect(mapStateToProps)(Profile);

/*
{usrReducer: {user: {googleId: "108372241908854413210",…}}}
usrReducer: {user: {googleId: "108372241908854413210",…}}
user: {googleId: "108372241908854413210",…}
email: "jbirdjon@gmail.com"
familyName: "Wallis"
givenName: "Jon"
googleId: "108372241908854413210"
imageUrl: "https://lh3.googleusercontent.com/a-/AOh14GjJt1nwmFExWgheFgKqIyWudumxKMeYvRIVu5eGHA=s96-c"
name: "Jon Wallis"
*/