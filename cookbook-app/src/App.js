import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {BrowserRouter, Route} from "react-router-dom";
import { IconContext } from 'react-icons';
import { MdHome } from 'react-icons/md';
import { connect } from 'react-redux';
import GoogleBtn from './components/GoogleBtn';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Create from './pages/Create/Create';
import Saved from './pages/Saved/Saved';
import Profile from './pages/Profile/Profile';
import './App.css';
import RecipePage from './pages/Recipe/Recipe';

class App extends React.Component {
  render() {
    return (
      //  Navbar
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <IconContext.Provider value ={{size:70}}> {/*Change the size/style of icons here */}
            <Navbar.Brand href="/"><MdHome/></Navbar.Brand>
          </IconContext.Provider>
          <Navbar.Collapse id="navbar">
            <Nav className="mr-auto">
              <Nav.Link href="/discover">Discover</Nav.Link>
              <Nav.Link href="/saved">Saved</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>

            {/* Display name of user if logged in along with dropdown to go to profile. Otherwise show loginbutton */}
            {/* TODO:: This needs to probably be updated when Jon finishes login screen functionality */}
            { this.props.user ?
              <NavDropdown title={this.props.user.name}>
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item><GoogleBtn /></NavDropdown.Item>
              </NavDropdown>:
              <GoogleBtn/>
            }
          </Navbar.Collapse>  
        </Navbar>

        {/* Routes */}
        <Route path="/" exact component={Home}/>
        <Route path="/discover" exact component={Discover}/>
        <Route path="/create" exact component={Create}/>
        <Route path="/saved" exact component={Saved}/>
        <Route path="/profile" exact component={Profile}/>
        {/* <Route path="/recipe/test" exact>
          <RecipePage/>
        </Route> */}
    </BrowserRouter>
    )
  }
}

//  Allow use of google profile information from redux
const mapStateToProps = (state) => ({
  user: state.usrReducer.user
})

export default connect(mapStateToProps)(App);