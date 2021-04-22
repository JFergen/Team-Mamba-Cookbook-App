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
            value: props.location.aboutProps.query,
            check: null
        }

        this.getRecipes = this.getRecipes.bind(this);
        this.renderItem = this.renderItem.bind(this);
        console.log(this.newVal);
       // console.log(value);
    }

    
        newVal = this.props.location.aboutProps.query

    // setvalue() {
    //     console.log(this.props.location.aboutProps);

    //     if( this.props.location.aboutProps >0 ){
    //         this.setState({ value: this.props.location.aboutProps.query})
    //     }
    //     else
    //     <Redirect to="/"/>        
    // }

    componentDidMount() {
        console.log(this.value);

        if (this.state.user !== this.props.user) {
            this.setState({ user: this.props.user }, () => {
                this.getRecipes();
            }) 
        }

        
    }

    async getRecipes() {        
         const data = await DatabaseDriver.find('tags',this.newVal);
         if(data !=0) { 
            this.setState({ recipes: data })
            }
         const data1 = await DatabaseDriver.find('author',this.newVal); 
            if(data1 !=0) { 
             this.setState({ recipes: data1 })
            }
         const data2 = await DatabaseDriver.find('name',this.newVal);
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

    render() {        
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