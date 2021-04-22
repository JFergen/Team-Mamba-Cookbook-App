import React, { Component } from 'react';
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import CardComponent from'../../components/card';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            user: null,
            value: null,
            check: null
        }

        this.getRecipes = this.getRecipes.bind(this);
        this.renderItem = this.renderItem.bind(this);
        console.log(props.location.aboutProps.name)
    }

    setvalue() {

        //console.log(e.target.value)
        this.setState({value: this.props.parentCallback})
        
    }
    componentDidMount() {
        if (this.state.user !== this.props.user) {
            this.setState({ user: this.props.user }, () => {
                this.getRecipes();
            }) 
        }

        
    }

    async getRecipes() {        
         const data = await DatabaseDriver.find('tags','sweet');
         if(data !=0) { 
            this.setState({ recipes: data })
            }
         const data1 = await DatabaseDriver.find('author','sweet'); 
            if(data1 !=0) { 
             this.setState({ recipes: data1 })
            }
         const data2 = await DatabaseDriver.find('name','sweet');
            if(data2!=0){
                this.setState({ recipes: data2 })
            } 
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
    //newval= this.props.parentCallback

    render() {        
       // const { value } = this.state.value
        console.log(localStorage.getItem('loggedIn'))
        return (
            <div>
                <h2 class="text-light"> The value is: {this.props.parentCallback} </h2>
            </div>
        )
    }
}


//  Allow use of google profile information from redux
const mapStateToProps = (state) => ({
    user: state.usrReducer.user
})


export default connect(mapStateToProps)(Search);