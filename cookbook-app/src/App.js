import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter } from "react-router-dom";
import { IconContext } from 'react-icons';
import { MdHome } from 'react-icons/md';
import GoogleBtn from './GoogleBtn';
import AllRoutes from './Routes/AllRoutes';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <IconContext.Provider value ={{size:70}}> {/*Change the size/style of icons here */}
            <Navbar.Brand href="/"><MdHome/></Navbar.Brand>
          </IconContext.Provider>
          <Navbar.Collapse id="navbar">
            <Nav className="mr-auto">
              <Nav.Link href="discover">Discover</Nav.Link>
              <Nav.Link href="saved">Saved</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="ml-sm-4">
              <Nav.Link href="#test">
                <GoogleBtn/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>  
        </Navbar>
 
        <AllRoutes />

    </BrowserRouter>
    )
  }
}

export default App;
