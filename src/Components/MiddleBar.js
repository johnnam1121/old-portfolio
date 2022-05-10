import React, { Component } from 'react'
import { Navbar, Col, Row, Container, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

class MiddleBar extends Component {
  render() {
    return (
      <Nav className='middlebar'>
        <Row>
          <Col sm={3}>
            <Nav.Link
              className='navItem'
              as={Link}
              to="/">Home
            </Nav.Link>
          </Col>
          <Col sm={3}>
            <Nav.Link
              className='navItem'
              as={Link}
              to="/AboutMe">Experience
            </Nav.Link>
          </Col>
          <Col sm={3}>
            <Nav.Link
              className='navItem'
              as={Link}
              to="/MyWorks">Projects
            </Nav.Link>
          </Col>
          <Col sm={3}>
            <Nav.Link
              className='navItem'
              as={Link}
              to="/ContactMe">Contact
            </Nav.Link>
          </Col>
        </Row>
      </Nav>
    )
  }
}

export default MiddleBar