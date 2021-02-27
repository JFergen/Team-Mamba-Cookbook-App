import React, { Component } from 'react';
import DatabaseDriver from '../../database/DatabaseDriver';

class Home extends Component {
    render() {
        console.log(DatabaseDriver.getAllRecipes());
        return (
            <div className="center">
                <h1>Welcome to the Home Area!</h1>
            </div>
        )
    }
}

export default Home;