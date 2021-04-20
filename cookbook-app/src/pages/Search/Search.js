import React, { Component } from 'react';
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import CardComponent from'../../components/card';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Search extends Component {

    constructor() {
        super();
        this.state = {
            recipes: [],
            user: null,
            //search: ''
        }

        this.getRecipes = this.getRecipes.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        const { tag } =this.props.location.state.search
        
        console.log(tag)
        //console.log(this.props.location.state.search)
        if (this.state.user !== this.props.user) {
            this.setState({ user: this.props.user }, () => {
                this.getRecipes();
            }) 
        }
    }

    async getRecipes() {
        console.log("Got here")
        const data = await DatabaseDriver.getRecipesFromTag('sweet');    // Gets recipes from a user
        this.setState({ recipes: data })
    }

    renderItem(index, key) {
        return (
            <div key={key}>
                <CardComponent 
                    recipe={this.state.recipes[index]}
                    user={this.state.user}
                />                 
            </div>
        )
    }


    render() {        
        const { tag } =this.props.location
        console.log(tag)
        console.log(localStorage.getItem('loggedIn'))
        return (
            <div>
                {this.props.user ?
                    <div className="list">
                        <ReactList
                            itemRenderer={this.renderItem}
                            length={this.state.recipes.length}
                            type='uniform'
                        />
                    </div>:
                    <Redirect to="/login"/>
                }
            </div>   
        )
    }
}


//  Allow use of google profile information from redux
const mapStateToProps = (state) => ({
    user: state.usrReducer.user
})


export default connect(mapStateToProps)(Search);