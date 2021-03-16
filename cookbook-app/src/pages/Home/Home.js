import React, { Component } from 'react';
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import './Home.css';
import { Card } from "react-bootstrap";
import CardComponent from'../../components/card';
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        }

        this.renderItem = this.renderItem.bind(this);
    }

    async componentDidMount() { //TODO:: Access the redux prop during this function
        // if (this.googleId) {
        //     const data = await DatabaseDriver.getUsersRecipes(this.props.user.googleId);    // Gets recipes from a user
        //     this.setState({ recipes: data })                                                // Set the recipes in the state
        //     console.log(data);
        // }        
    }

    // //  Render an item in the list
    // renderItem(index, key) {
    //     return (
    //         <div 
    //             key={key}
    //             style={{ 
    //                 lineHeight: '20px',
    //                 marginBottom: '50px',
    //                 border: '2px solid white'
    //             }}
    //         >
    //             Recipe {index + 1}:
    //             <p>ID: {this.state.recipes[index]._id.$oid}</p>
    //             <p>Name: {this.state.recipes[index].name}</p>
    //             <p>Directions: {this.state.recipes[index].directions}</p>
    //         </div>
    //     )
    // }

    renderItem(index, key) {
        
        return (
            <div key={key}>
                <div classname ={Card}> <CardComponent /> 
                </div>
            </div>
        )
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="list">
                <ReactList
                    itemRenderer={this.renderItem}
                    length={this.state.recipes.length}
                    type='uniform'
                />
            </div>
        )
    }
}

//  Allow use of google profile information from redux
const mapStateToProps = (state) => ({
    user: state.usrReducer.user
})

export default connect(mapStateToProps)(Home);