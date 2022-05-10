import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';

class TopBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="" className="App">

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
              <Nav.Link href="/portfolio/AboutMe">About Me</Nav.Link>
              <Nav.Link href="/portfolio/MyWorks">My Work</Nav.Link>
              <Nav.Link href="/portfolio/ContactMe">Contact Me</Nav.Link>
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