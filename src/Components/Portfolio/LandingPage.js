import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class LandingPage extends Component {
  render() {
    return (
      <Container fluid className='shadow-sm mb-5'>
        <Row id='LandingSection' style={{ height: '80vh' }}>
          <Col md={{ span: 4, offset: 2 }}>
            <h1 className='mainHeadings'>Hi, I'm <span className='fancyName'>John!</span></h1>
            <h2 className='smallerHeadings'>Welcome to my portfolio website</h2>
            <p className='paragraphs'>
              My name is John Nam and I teach computer science.
              I built this webapp using React and Bootstrap.
              Feel free to take a look around!
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johnnam1121"><button className='button'>Check out my stuff!</button></a>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default LandingPage