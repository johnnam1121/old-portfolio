import React, { Component } from 'react'
import { Navbar, Col, Row, Container } from 'react-bootstrap';

class MiddleBar extends Component {
  render() {
    return (
      <Container className='middlebar'>
        <Row>
          <Col sm={3}>
            <a className='navItem' href="/">Home</a>
          </Col>
          <Col sm={3}>
            <a className='navItem' href="AboutMe">Experience</a>
          </Col>
          <Col sm={3}>
            <a className='navItem' href="MyWorks">Projects</a>
          </Col>
          <Col sm={3}>
            <a className='navItem' href="ContactMe">Contact</a>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MiddleBar