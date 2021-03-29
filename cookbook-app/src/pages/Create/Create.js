import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import FileBase64 from 'react-file-base64';
import DatabaseDriver from '../../database/DatabaseDriver';
import { Multiselect } from 'multiselect-react-dropdown';

class Create extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description:'',
            ingridients:'',
            directions:'',
            time:'',
            image: null,   
            tags : [
                {id: "1", value: 'pizza'},
                {id: "2",value: 'pasta'},
                {id: "3",value: 'soup'},
                {id: "4",value: 'chicken'},
                {id: "5",value: 'thai'},
                {id: "6",value: 'mongolian'},
                {id: "7",value: 'indian'},
                {id: "8",value: 'spicy'},
                {id: "9",value: 'sweet'},
                {id: "10",value: 'sour'},
            ]
        }
    }
    onImageUpload(uploadResult) {
        this.setState({
            image: uploadResult.base64
        })
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
      };

      render() {    
        const {tags} = this.state;  
        return (
            <div className="d-flex justify-content-center">
                <Form className="m-3 text-center card bg-dark p-3">
                    <h1>
                    <Form.Label>Create Recipe</Form.Label>
                    </h1>
                    <Form.Group>
                        <div style={{width: '20em'}}>
                            <Form.Control name="name" value={this.state.title} onChange={this.handleChange} placeholder="Title"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div style={{width: '30em'}}>
                            <Form.Control as="textarea" name="description" value={this.state.description} onChange={this.handleChange} rows={3} placeholder="A little about your recipe"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div style={{width: '30em'}}>
                            <Form.Control as="textarea" name="ingridients" value={this.state.ingridients} onChange={this.handleChange} rows={3} placeholder="Ingridients"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div style={{width: '30em'}}>
                            <Form.Control as="textarea" name="directions" value={this.state.directions}onChange={this.handleChange} rows={5} placeholder="Directions"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div style={{width: '15em'}}>
                            <Form.Control name="time" value={this.state.time} onChange={this.handleChange} placeholder="Time Taken"/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div class="text-dark bg-light" style={{width: '25em'}}>
                            <Multiselect
                                selectionLimit ='3'
                                placeholder="Tags"
                                value={this.state.tags}
                                displayValue="value" // Property name to display in the dropdown options
                                options={tags} // Options to display in the dropdown
                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                onChange={this.handleChange} // Function will trigger on select event
                                />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <FileBase64 id="foodImg" label="Upload image of recipe" multiple={false} onDone={(f)=>this.onImageUpload(f)}/>
                    </Form.Group>
                    <Button 
                        variant="outline-success" 
                        type="submit"
                        onClick={() =>  { alert(' Recipe created Successfully '); {DatabaseDriver.addRecipe(this.props.user.googleId, {
                            'name': this.state.name,
                            'description':this.state.description,
                            'ingredients': this.state.ingridients,
                            'directions': this.state.directions,
                            'time': this.state.time,
                            'tags':this.state.tags,
                            'author': this.props.user.name,
                            'image': this.state.image
                        })}}}
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