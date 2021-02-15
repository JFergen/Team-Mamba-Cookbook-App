import React, { Component } from 'react';
import './App.css';
import Results from './components/Results';
import NewUser from './components/NewUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      names: [],
      loading: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ user: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true,
    })
    await fetch('/addUser/' + this.state.user, {
      method: 'GET'
    });
    this.getUsers()
  }


  getUsers() {
    fetch('/getUsers/')
      .then(response => response.json())
      .then(json => {
        this.setState({
          user: '',
          names: json,
          loading: false
        })
      })
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NewUser handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.user} />
          {this.state.loading ? <h1>Loading</h1> : <Results {...this.state} />}
        </header>
      </div>
    );
  }
}

export default App;
