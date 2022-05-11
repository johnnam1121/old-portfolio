import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="" className="background" fixed='top'>
        <Container>
          <Navbar.Brand href="/portfolio/">
            <img src={process.env.PUBLIC_URL + "/Pictures/JNlogo.png"} alt="logo" width="30" height="30" className="d-inline-block align-top rounded" />{' '}
          </Navbar.Brand>
          <Nav.Item>
            <p className='paragraph' style={{ fontSize: "3vh" }}>John Nam</p>
          </Nav.Item>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="alignRight">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/AboutMe">Experience
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/MyWorks">Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/ContactMe">Contact
              </Nav.Link>
              <NavDropdown title="Socials" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://www.facebook.com/john.nam.98/" target="_blank"><i class="bi bi-facebook"></i> Facebook</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.linkedin.com/in/johnnam93" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/johnnam1121" target="_blank"><i class="bi bi-github"></i> GitHub</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default TopBar