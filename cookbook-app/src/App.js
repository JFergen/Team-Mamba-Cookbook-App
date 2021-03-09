import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IconContext } from 'react-icons';
import { MdHome } from 'react-icons/md';
import Logout from './components/Logout';
import AllRoutes from './Routes/AllRoutes';
import Login from './pages/Login/Login';

import './App.css';

class App extends React.Component {

  componentDidMount(){
    console.log('I work!')
  }

  render() {
    return (
      <BrowserRouter>
      <Switch> {/* Here is where switch is used to not have the nav bar on the login page. The login bar is in div tags with the rest of the pages. */}
      <Route exact path="/Login" component={Login} />
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <IconContext.Provider value ={{size:70}}> 
            <Navbar.Brand href="/"><MdHome/></Navbar.Brand>
          </IconContext.Provider>
          <Navbar.Collapse id="navbar">
            <Nav className="mr-auto">
              <Nav.Link href="discover">Discover</Nav.Link>
              <Nav.Link href="saved">Saved</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="ml-sm-4">
              <Nav.Link href="#test">
                <Logout />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>  
        </Navbar>
        <AllRoutes />
      </React.Fragment>
      </Switch>
      </BrowserRouter>


    )
  }
}

export default App;

/*<Route path="/" exact component={Home}/>
<Route path="/discover" component={Discover}/>
<Route path="/create" component={Create}/>
<Route path="/saved" component={Saved}/>
<Route path="/profile" component={Profile}/>*/