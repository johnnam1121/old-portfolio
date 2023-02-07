import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
      <Container fluid>
        <Row className='shadow-lg p-2 mb-2' style={{ width: '100%', position: 'fixed', backgroundColor: '#222831', alignContent:'left' }}>
          <Col>
            <Navbar.Brand href="/portfolio/">
              <img src={process.env.PUBLIC_URL + "/Pictures/JNlogo.png"} alt="logo" width="30" height="30" className="d-inline-block align-top rounded" />{' '}
            </Navbar.Brand>
          </Col>
          <Col>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabledtesttesttest
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TopBar

{/* <NavDropdown title="Socials" id="collasible-nav-dropdown">
  <NavDropdown.Item href="https://www.facebook.com/john.nam.98/" target="_blank"><i class="bi bi-facebook"></i> Facebook</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="https://www.linkedin.com/in/johnnam93" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="https://github.com/johnnam1121" target="_blank"><i class="bi bi-github"></i> GitHub</NavDropdown.Item>
</NavDropdown> */}
