import React, { Component } from 'react';
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import CardComponent from'../../components/card';
import { connect } from 'react-redux';
import './Discover.css';

class Discover extends Component {
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
        const data = await DatabaseDriver.getNRandomRecipes(2);    // Gets recipes from a user
        this.setState({ recipes: data })
    }

    renderItem(index, key) {
        return (
            <div key={key}>
                <CardComponent
                    name={this.state.recipes[index].name}
                    description={this.state.recipes[index].description}
                    author={this.state.recipes[index].author}
                    dateAdded={this.state.recipes[index].date_added}
                    image={this.state.recipes[index].image}
                />                 
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

export default connect(mapStateToProps)(Discover);