import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import {MdSave, MdChatBubbleOutline} from 'react-icons/md'
import StarRating from 'react-awesome-stars-rating';
import './card.css'

class CardComponent extends Component {
    render() {
        return (
            <Card className="m-3">
            <Card.Header className="p-0 text-center bg-secondary">
                    <h class="text-dark font-weight-bold">{this.props.name}</h>
                    <h className="preview_usr_stars p-2">
                        <StarRating 
                            name="cookbook-rating"
                            size={20}
                            totalStars={5}
                            value={5}
                        />
                    </h>
                    <a href="#" class="float-right" style={{color: 'black'}}><MdSave size={32}/></a>
            </Card.Header>
                <Card.Body class="table-warning">
                    <Card.Img class="card-img-left" src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg"/>
                    <Card.Text className="mt-2 text-dark">{this.props.description}</Card.Text>
                    <div class="d-flex justify-content-around text-dark">
                        <div class='one'>Ingredients 
                            <div class="box">
                                test
                            </div>
                        </div>
                        <div class='two'>Info
                            <div class="box">
                                test
                            </div>
                        </div>
                        <div class='three'>Directions
                            <div class="box">
                                test
                            </div>
                        </div>
                    </div>
                    <a href="#" class="nav-link text-primary float-left"><MdChatBubbleOutline/>Comments</a> 
                    <a href="#" class="btn btn-primary btn-sm float-right p-2" id="right-panel-link">Recipe Page</a>
                    <a href="#" class= "float-right p-1" style={{ color: 'blue'}} >#Yummy</a>
                </Card.Body>
            <Card.Footer class="p-0 bg-secondary">
                <h class="text-light font-weight-bold"> Made by:</h>
                <a href="#" style={{paddingLeft: 8, color: 'blue'}}>{this.props.author}</a> 
                <h class="text-dark float-right">3:08am</h>
            </Card.Footer>
        </Card>
        )
    }
}

export default CardComponent;