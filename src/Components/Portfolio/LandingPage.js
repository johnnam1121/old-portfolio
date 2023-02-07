import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

class LandingPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ height: '80vh' }}>
          <Col md={{span: 4, offset: 2}}>
            <h1 className='mainHeadings'>John Nam</h1>
            <h2 className='smallerHeadings'>Welcome to my portfolio website!</h2>
            <p className='paragraphs'>
              My name is John and I teach computer science!
              I built this website using React and Bootstrap.
              Feel free to take a look around!
            </p>
            <button className='button'>Check out my stuff!</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default LandingPage