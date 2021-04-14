import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import About from './components/About';
import Notbook from './components/Notbook';
import Call from './components/Call';
import Home from './components/Home';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {AiFillBug} from 'react-icons/ai';
function App() {
    let styleobj = { fontSize: 40 }
  return (
      <BrowserRouter>
        <div className="container-fluid ">
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                <Navbar.Brand href="#home"><AiFillBug style={styleobj}/>Beautiful Life</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/" >Home</Link>
                        <Link className="nav-link" to="/About" >About</Link>
                        <Link className="nav-link" to="/Call" >Call</Link>
                        <Link className="nav-link" to="/Notbook" >Notbook</Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Link className="nav-link" to="/" >More deets</Link>
                        <Link className="nav-link" eventKey={2} to="/" >
                            Dank memes
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>





            <Switch>
                <Route path="/"  component={Home} exact   />
                <Route path="/About"  component={About}   />
                <Route path="/Notbook"  component={Notbook}    />
                <Route path="/Call"  component={Call}    />
            </Switch>
            
        </div>
    </BrowserRouter>
  );
}
export default App;