import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {

   const activeStyle ={
        fontWeight: "bold",
        color: "red"
      };

    return (
        <div>
            <Navbar expand="lg" bg="dark" >
                <Container>
                        <Navbar.Brand href="#home" className="text-white" style={{marginRight:'900px'}}>React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink activeStyle={activeStyle} to="/home" className="text-white me-3">Home</NavLink>
                                <NavLink activeStyle={activeStyle} to="/sports" className="text-white ">Sports</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;