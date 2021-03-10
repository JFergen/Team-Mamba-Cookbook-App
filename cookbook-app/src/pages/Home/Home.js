import React, { Component } from 'react';
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        }

        this.renderItem = this.renderItem.bind(this);
    }

    async componentDidMount() {
        const data = await DatabaseDriver.getAllRecipes();  // Get recipes from the database
        this.setState({ recipes: data })                    // Set the recipes in the state
    }

    //  Render an item in the list
    renderItem(index, key) {
        return (
            <div 
                key={key}
                style={{ 
                    lineHeight: '20px',
                    marginBottom: '50px',
                    border: '2px solid white'
                }}
            >
                Recipe {index + 1}:
                <p>ID: {this.state.recipes[index]._id.$oid}</p>
                <p>Name: {this.state.recipes[index].name}</p>
                <p>Directions: {this.state.recipes[index].directions}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="home">
                <h1>Welcome to the Home Area!</h1>
                <div className="list">
                    <ReactList
                        itemRenderer={this.renderItem}
                        length={this.state.recipes.length}
                        type='uniform'
                    />
                </div>
            </div>
        )
    }
}

export default Home;