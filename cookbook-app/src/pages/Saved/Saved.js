import React, { Component } from 'react';
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import CardComponent from'../../components/card';
import { connect } from 'react-redux';
import './Saved.css';

class Saved extends Component {
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
        const data = await DatabaseDriver.getUserSaved(this.state.user.googleId);    // Gets recipes from a user
        const dataPostJson = JSON.parse(data) 
        this.setState({ recipes: dataPostJson })
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

export default connect(mapStateToProps)(Saved);