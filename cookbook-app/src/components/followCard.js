import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import {MdSave, MdChatBubbleOutline} from 'react-icons/md'
import StarRating from 'react-awesome-stars-rating';
import DatabaseDriver from '../database/DatabaseDriver'
import './card.css'


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
            <Card.Body>this.props.follow.name</Card.Body>
        </Card>
    }
}

export default FollowComponent;