import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import {MdSave, MdChatBubbleOutline} from 'react-icons/md'
import StarRating from 'react-awesome-stars-rating';
import DatabaseDriver from '../database/DatabaseDriver'
import './card.css'

class CardComponent extends Component {
    constructor() {
        super();
        this.state = {
            change: true,
            starValue: null,
            //saved: false    // Keep the saved recipes in redux (get from back-end) and check if the current recipe_id matches one that is in the saved array. If it is, change the saved icon to blue and add it the recipe_id to database
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (value) => {
        if (this.state.change) {
            this.setState({ 
                change: false,
                starValue: value
            })
        }
    }

    render() {
        return (
            <Card className="m-3">
            <Card.Header className="p-0 text-center bg-secondary">
                    <h class="text-dark font-weight-bold">{this.props.recipe.name}</h>
                    <h className="preview_usr_stars p-2">
                        <StarRating 
                            size={20}
                            isHalf={false}
                            value={this.state.starValue}
                            isEdit={this.state.change}
                            onChange={this.handleChange}
                        />
                    </h>
                    <a href="#" class="float-right" style={{color: 'black'}}><MdSave size={32}/></a>
            </Card.Header>
                <Card.Body class="table-warning">
                    <Card.Img class="card-img-left" src={this.props.image}/>
                    <Card.Text className="mt-2 text-dark">{this.props.description}</Card.Text>
                    <div class="d-flex justify-content-around text-dark">
                        <div class='one'>Ingredients 
                            <div class="box">
                                {this.props.recipe.ingredients}
                            </div>
                        </div>
                        <div class='two'>Info
                            <div class="box">
                                {this.props.recipe.time}
                            </div>
                        </div>
                        <div class='three'>Directions
                            <div class="box">
                                {this.props.recipe.directions}
                            </div>
                        </div>
                    </div>
                    <a href="#" class="nav-link text-primary float-left"><MdChatBubbleOutline/>Comments</a> 
                    <a href="#" class="btn btn-primary btn-sm float-right p-2" id="right-panel-link">Recipe Page</a>
                    {/* {this.props.recipe.tags.map((value, index) => {
                        return (<a href="#" key={index} class= "float-right p-1" style={{ color: 'blue'}}>#{this.props.recipe.tags[index]}</a>)
                    })} */}
                    {/* <a href="#" class= "float-right p-1" style={{ color: 'blue'}}>{this.props.recipe.tags}</a> */}
                </Card.Body>
            <Card.Footer class="p-0 bg-secondary">
                <h class="text-light font-weight-bold">Made by:</h>
                <a href="#" style={{paddingLeft: 8, color: 'blue'}}>{this.props.recipe.author}</a> 
                <h class="text-dark float-right">Created {this.props.recipe.date_added}</h>
            </Card.Footer>
        </Card>
        )
    }
}

export default CardComponent;