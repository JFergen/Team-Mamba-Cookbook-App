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

    // render() {
    //     return (
    //         <div className="home">
    //             <h1>Welcome to the Home Area!</h1>
    //             <div className="list">
    //                 <ReactList
    //                     itemRenderer={this.renderItem}
    //                     length={this.state.recipes.length}
    //                     type='uniform'
    //                 />
    //             </div>
    //         </div>
    //     )
    // }

    render() {
        return (
            <Card className="m-3">
                <Card.Header className="p-0 text-center bg-secondary">
                        <h class="text-dark font-weight-bold">Pasta Food Stuff</h>
                        <a href="#" class="float-right" style={{color: 'black'}}><MdSave/></a>
                </Card.Header>
                    <Card.Body class="table-warning">
                        <Card.Img variant="rounded float-left mr-4" src="//placehold.it/200" width="auto" height="auto" />
                        <Card.Text className="mt-2 text-dark">
                            This reciepe is all about being super good, super yummy and wow it is so easy to cook its so crazy. Please take a look at it and you will love it I promise. I have made it my mission in life to bless those with this recipe passed on through my family. You are welcome.  
                        </Card.Text>
                        <div class="d-flex justify-content-around">
                            <div class='one'>
                                <Card.Text className="text-dark">
                                    Ingredients
                                </Card.Text>
                                <div class="box">
                                    test
                                </div>
                            </div>
                            <div class='two'>
                                <Card.Text className="text-dark">
                                    Info
                                </Card.Text>
                                <div class="box">
                                    test
                                </div>
                            </div>
                            <div class='three'>
                                <Card.Text className="text-dark">
                                    Directions
                                </Card.Text>
                                <div class="box">
                                    test
                                </div>
                            </div>
                        </div>
                        <a href="#" class="nav-link text-primary float-left"><MdChatBubbleOutline/>Comments</a>
                        <a href="#" class="btn btn-primary float-right float-bottom" id="right-panel-link">Recipe Page</a>
                    </Card.Body>
                <Card.Footer class="p-0 bg-secondary">
                    <h class="text-light font-weight-bold"> Made by:</h>
                    <a href="#" style={{paddingLeft: 8, color: 'blue'}}>User</a> 
                    <h class="text-dark float-right">3:08am</h>
                </Card.Footer>
            </Card>
        )
    }
}

export default Home;