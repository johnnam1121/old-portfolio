import React, { Component } from 'react'
import { Navbar, Col, Row, Container, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

class MiddleBar extends Component {
  render() {
    function scrollToTop() {
      window.scrollTo(0, 0);
    }
  
    return (
      <Nav className='middlebar'>
        <Row onClick={()=> {
              scrollToTop()
            }}>
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