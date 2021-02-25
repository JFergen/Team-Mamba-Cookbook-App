import React, { Component } from 'react';
import GoogleBtn from './GoogleBtn';
import './App.css';
// import Results from './components/Results';
// import NewUser from './components/NewUser';
// import { render } from 'react-dom';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: '',
//       names: [],
//       loading: true
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ user: event.target.value });
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     this.setState({
//       loading: true,
//     })
//     await fetch('/addUser/' + this.state.user, {
//       method: 'GET'
//     });
//     this.getUsers()
//   }


//   getUsers() {
//     fetch('/getUsers/')
//       .then(response => response.json())
//       .then(json => {
//         this.setState({
//           user: '',
//           names: json,
//           loading: false
//         })
//       })
//   }

//   componentDidMount() {
//     this.getUsers();
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <NewUser handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.user} />
//           {this.state.loading ? <h1>Loading</h1> : <Results {...this.state} />}
//         </header>
//       </div>
//     );
//   }
// }

class App extends React.Component {

  // componentDidMount() {
  //   console.log('Loading');

  //   window.gapi.load('auth2', () => {
  //     window.gapi.auth2.init({
  //       client_id: '503429243436-tmfnhmholf6frccbc0f41a3vp0rpo7hq.apps.googleusercontent.com'
  //     });

  //     window.gapi.load('signin2', () => {
  //       const params = {
  //         onSuccess: () => {
  //           console.log('User has finished signing in!')
  //         }
  //       }
  //       window.gapi.signin2.render('loginButton', params);
  //     })

  //   });
  // }

  render() {
    return (
      <div className='App'>
        <h1>Welcome to the Cookbook App!</h1>
        <GoogleBtn/>
      </div>
    )
  }
  
}

export default App;
