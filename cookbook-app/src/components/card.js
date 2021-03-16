import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import {MdSave, MdChatBubbleOutline} from 'react-icons/md'
import { IconContext } from 'react-icons';
import FormComponent from './star-rating';
import './card.css'

class CardComponent extends Component {

    render() {

        return (
            <Card className="m-3">
            <Card.Header className="p-0 text-center bg-secondary">
                    <h class="text-dark font-weight-bold">Pasta Food Stuff</h>
                    <h className="preview_usr_stars"> <FormComponent/></h>
                    <a href="#" class="float-right" style={{color: 'black'}}><MdSave size={32}/></a>
            </Card.Header>
                <Card.Body class="table-warning">
                    <Card.Img class="card-img-left" src="//placehold.it/200" width="auto" height="float-auto" />
                    <Card.Text className="mt-2 text-dark">
                        This reciepe is all about being super good, super yummy and wow it is so easy to cook its so crazy. Please take a look at it and you will love it I promise. I have made it my mission in life to bless those with this recipe passed on through my family. You are welcome.  
                    </Card.Text>
                    <div class="d-flex justify-content-around text-dark">
                        <div class='one'> Ingredients 
                            <div class="box">
                                test
                            </div>
                        </div>
                        <div class='two'> Info
                            <div class="box">
                                test
                            </div>
                        </div>
                        <div class='three'> Directions
                            <div class="box">
                                test
                            </div>
                        </div>
                    </div>
                    <a href="#" class="nav-link text-primary float-left"><MdChatBubbleOutline/>Comments</a> 
                    <a href="#" style={{paddingLeft: 1300, color: 'blue'}} >#Yummy</a>
                    <a href="#" class="btn btn-primary btn-sm float-right float-bottom" id="right-panel-link">Recipe Page</a>
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

export default CardComponent;