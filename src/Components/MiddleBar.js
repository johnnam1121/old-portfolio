import React, { Component } from 'react'
import { Navbar, Col, Row, Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

class MiddleBar extends Component {
  render() {
    return (
      <Container className='middlebar'>
        <Row>
          <Col sm={3}>
            <a className='navItem' href="/portfolio">Home</a>
          </Col>
          <Col sm={3}>
            <a className='navItem' href="/portfolio/AboutMe">Experience</a>
          </Col>
          <Col sm={3}>
            <a className='navItem' href="/portfolio/MyWorks">Projects</a>
          </Col>
          <Col sm={3}>
            <a className='navItem' href="/portfolio/ContactMe">Contact</a>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MiddleBar