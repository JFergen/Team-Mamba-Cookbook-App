import React, { Component } from 'react'
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import CardComponent from'../../components/card';
import { connect } from 'react-redux';
import './Profile.css';
import { Button } from 'react-bootstrap';
import SkyLight from 'react-skylight';
import styled, { css } from "styled-components";
import GoogleBtn from '../../components/GoogleBtn';
import { Redirect } from 'react-router-dom';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import FollowCard from '../../components/followCard';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            recipes: [],
            user: null,
            following: [],
            followers: []
        }
    
        this.getRecipes = this.getRecipes.bind(this);
        this.getFollowing = this.getFollowing.bind(this);
        this.getFollowers = this.getFollowers.bind(this);

        this.renderItem = this.renderItem.bind(this);
        this.renderFollowers = this.renderFollowers.bind(this);
        this.renderFollowing = this.renderFollowing.bind(this);
        this.followUser = this.followUser.bind(this);

        
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        if (this.state.user !== this.props.user) {
            this.setState({ user: this.props.user }, () => {
                this.getFollowers();
                this.getFollowing();
                this.getRecipes();
            })
        }
    }



    async getRecipes() {
        const data = await DatabaseDriver.getUsersRecipes(this.state.user.googleId);    // Gets recipes from a user
        this.setState({ recipes: data })
    }


            // need to fix these functions that return the list of follows.
    async getFollowing() {
        const followingData = await DatabaseDriver.getFollowing(this.state.user.googleId);    // Gets recipes from a user
        this.setState({ following: followingData })
        console.log("following: " + this.state.following)
    }

    async getFollowers() {
        console.log("hello")
        const followerData = await DatabaseDriver.getFollowers(this.state.user.googleId);    // Gets recipes from a user
        this.setState({ followers: followerData })
        console.log("followers: " + this.state.followers)
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
    renderFollowing(index, key){

        return (<div key={key}>
                    <FollowCard
                        foll={this.state.following[index]}
                    />
                </div>)
    }

    renderFollowers(index, key){
        return (<div key={key}>
                    <FollowCard
                        foll={this.state.followers[index]}
                    />
                </div>)
    }
















    //"https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"

    followUser() {
        DatabaseDriver.follow(
            this.props.user.googleId,
            this.props.user.googleId
        );
    }

    render() {

        var myBigGreenDialog = {
            backgroundColor: '#F3F3F3',
            color: '#000000',
            width: '50%',
            height: '600px',
            marginTop: '-300px',
            marginLeft: '-25%',
          };

        const Button = styled.button`
            background-color: black;
            color: white;
            font-size: 20px;
            padding: .25em lem;
            border 2px solid white;
            margin: 10px 20px;
            cursor: pointer;
        
            ${props => props.follow && css`
            background: #F3F3F3;
            color: black;
            padding: .25em 90px;
            `}
        `;

        return (
            <div>
                {this.props.user ?
                    <div>
                        <div>
                            {console.log(this.props.user.givenName)}
                            <div style={{
                                    display:"flex",
                                    justifyContent:"space-around",
                                    margin:"25px 500px"
                                }}>
                                <div>
                                    <img style={{width: "200px", height:"200px", borderRadius:"110px"}}
                                    src= {this.props.user.imageUrl}/>

                                </div>
                                <div>
                                    <div>
                                        <h1>{this.props.user.name}</h1>
                                    </div>

                                    <div style={{display:"flex", justifyContent:"space-between", width:"200%"}}>
                                        <section>
                                        <Button onClick={() => this.following.show()}>Following</Button>
                                        <Button onClick={() => this.followers.show()}>Followers</Button>
                                        </section>
                                        <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref={ref => this.following = ref} title="Following">
                                        {console.log(this.state.following.length)}
                                            <ReactList 
                                                itemRenderer={this.renderFollowing}
                                                length={this.state.following.length}
                                                type='uniform'
                                            />
                                            
                                        </SkyLight>
                                        <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref={ref => this.followers = ref} title="Followers">
                                            {console.log(this.state.followers.length)}
                                            <ReactList 
                                                itemRenderer={this.renderFollowers}
                                                length={this.state.followers.length}
                                                type='uniform'
                                            />
                                        </SkyLight>
                                    </div>
                                    <div style={{display:"flex", justifyContent:"space-between", width:"300%"}}>
                                        <section>
                                            {/*  add functionality that switches based on if they are followed. */}
                                            <Button follow onClick={this.followUser}>Follow</Button>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="list">
                                <ReactList
                                    itemRenderer={this.renderItem}
                                    length={this.state.recipes.length}
                                    type='uniform'
                                />
                            </div>
                        </div>
                    </div>:
                    <Redirect to="/login"/>
                }
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