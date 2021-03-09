import React, { Component } from 'react';
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import './Home.css';
import Card from '../../Cards'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        }

        this.renderItem = this.renderItem.bind(this);
    }

    async componentDidMount() {
        const data = await DatabaseDriver.getRecipesFromUser(123455);
        this.setState({ recipes: data })
    }

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

    render() {
        return(
            <div className="App">
                <Card
                title='Card Title'
                imageURL='https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4f%2F82%2F8d%2F4f828d05f82b8b7aedfe8be6a7d9d2a3.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F350366046007007479%2F&tbnid=-3dOdBkeOueX-M&vet=12ahUKEwjm8rqXsqHvAhW6gU4HHTwGCCsQMygBegUIARCoAQ..i&docid=exUuJz2767CCOM&w=2500&h=2539&q=coding%20meme&ved=2ahUKEwjm8rqXsqHvAhW6gU4HHTwGCCsQMygBegUIARCoAQ'
                body='This is our reciepe'
                ingredient='everything available'
                time='0 mins'
                 />
            </div>
        )
    }
}

export default Home;