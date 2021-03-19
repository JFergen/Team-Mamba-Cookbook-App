import React from 'react';
import StarRating from 'react-awesome-stars-rating';

class FormComponent extends React.Component {
    render() {

        return (

            <StarRating name="cookbook-rating" size={20} totalStars={5}/>
        );
    }
}
export default FormComponent;