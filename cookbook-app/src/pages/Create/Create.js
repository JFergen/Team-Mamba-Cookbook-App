import React, { Component } from 'react';
import {Form} from 'react-bootstrap';

class Create extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <Form className="m-3 text-center card bg-dark p-3">
                    <Form.Label>Create Recipe</Form.Label>
                    <Form.Group>
                        <div style={{width: '20em'}}>
                            <Form.Control placeholder="Title"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div style={{width: '30em'}}>
                            <Form.Control as="textarea" rows={2} placeholder="Description"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div style={{width: '25em'}}>
                            <Form.Control placeholder="Image"/>
                        </div>
                        <Form.Text>
                            Must be a direct link to an image
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Create;