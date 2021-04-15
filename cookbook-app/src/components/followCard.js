import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import {MdSave, MdChatBubbleOutline} from 'react-icons/md'
import StarRating from 'react-awesome-stars-rating';
import DatabaseDriver from '../database/DatabaseDriver'
import './followCard.css'


class FollowComponent extends Component {
    constructor() {
        super();
        this.state = {

        }

        //mounting
    }

    async componentDidMount() {
    }

    render() {
        return <Card className="foll">
            <Card.Body class="table-primary">
                <div class="box font-weight-normal">
                    <b>this.props.follow.name</b>
                </div>
            </Card.Body>
        </Card>
    }
}

export default FollowComponent;