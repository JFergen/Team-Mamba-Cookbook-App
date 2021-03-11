import React, { Component } from 'react';
import DatabaseDriver from '../../database/DatabaseDriver';
import ReactList from 'react-list';
import './Home.css';
import { Card } from "react-bootstrap";
import {MdSave, MdChatBubbleOutline} from 'react-icons/md'
import { IconContext } from 'react-icons';
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
        return (
            <Card>
                <Card.Header class="bg-secondary text-center">
                    <h class="text-dark text-center font-weight-bold ">Pasta Food Stuff </h>
                    <IconContext.Provider value={{ style: {verticalAlign: 'middle', justifyContent: 'end'} }}>
                        {/* <a href="#" class="btn btn-default d-flex justify-content-end"> */}
                            <MdSave />
                            {/* </a> */}
                    </IconContext.Provider>
                </Card.Header>
            
                    <Card.Body class="p-1 mb-200 table-warning">
                    <Card.Img variant="rounded float-left" src="//placehold.it/200" width="auto" height="auto" />
                            <Card.Text class="text-dark">
                                This reciepe is all about being super good, super yummy and wow it is so easy to cook its so crazy. Please take a look at it and you will love it I promise. I have made it my mission in life to bless those with this recipe passed on through my family. You are welcome.  
                            </Card.Text>
                            <Card.Text class="text-dark text-center">
                                Ingredients
                            </Card.Text>
                        <a href="#" class="nav-link text-primary"><MdChatBubbleOutline /> Comments</a>
                        <a href="#" class="btn btn-primary pull-right" id="right-panel-link">Recipe Page</a>
                    </Card.Body>
                <Card.Footer class="p-2 mb-200 bg-secondary">
                <h class=" text-light text-left font-weight-bold"> Made by:</h>
                <a href="#" class="btn btn-default font-weight-bold">User</a> 
                <h class="text-right text-dark d-flex justify-content-end">3:08am</h>
                </Card.Footer>
            </Card>
        )
    }
}

export default Home;