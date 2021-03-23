import React, { Component } from 'react';
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import './Home.css';
import { Card } from "react-bootstrap";
<<<<<<< HEAD
import {MdSave, MdChatBubbleOutline} from 'react-icons/md'
import FormComponent from '../../components/star-rating';
=======
import CardComponent from'../../components/card';
>>>>>>> c80e051a8a6511826a662ccf4445081a572c6bf9
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            user: null
        }

        this.getRecipes = this.getRecipes.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }
<<<<<<< HEAD

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
=======
    
    async componentDidMount() {
        const data = await DatabaseDriver.getUsersRecipes('108347274282317384205');
        // console.log(data);
        //const data = await DatabaseDriver.getAllRecipes();  // Get recipes from the database
        this.setState({ recipes: data })                    // Set the recipes in the state
>>>>>>> c80e051a8a6511826a662ccf4445081a572c6bf9
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