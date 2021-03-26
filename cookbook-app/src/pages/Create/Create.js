import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import FileBase64 from 'react-file-base64';
import DatabaseDriver from '../../database/DatabaseDriver';

class Create extends Component {

    state = {
        image: null
    }

    onImageUpload(uploadResult) {
        this.setState({
            image: uploadResult.base64
        })
    }

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
                            <Form.Control as="textarea" rows={3} placeholder="Ingridents"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div style={{width: '30em'}}>
                            <Form.Control as="textarea" rows={5} placeholder="Description"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div style={{width: '25em'}}>
                            <Form.Control placeholder="Time Taken"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div style={{width: '25em'}}>
                            <Form.Control placeholder="Tags"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div style={{width: '25em'}}>
                            <Form.Control placeholder="Image URL"/>
                        </div>
                        <Form.Text>OR</Form.Text>
                        <FileBase64 id="foodImg" label="Upload image of recipe" multiple={false} onDone={(f)=>this.onImageUpload(f)}/>
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={() => {DatabaseDriver.addRecipe(this.props.user.googleId, {
                            'name': 'pizza',
                            'ingredients': ['sauce', 'cheese'],
                            'directions': 'do stuff',
                            'author': this.props.user.name,
                            'image': this.state.image
                        })}}
                    >
                        Create
                    </Button>
                </Form>
            </div>
        )
    }
}

//  Allow use of google profile information from redux
const mapStateToProps = (state) => ({
    user: state.usrReducer.user
})

export default connect(mapStateToProps)(Create);