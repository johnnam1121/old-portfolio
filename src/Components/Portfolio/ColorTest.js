import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class ColorTest extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ height: '100vh' }}>
          <Col>
            <h1>John Nam</h1>
            <h2>Welcome to my portfolio website!</h2>
            <p>
              My name is John and I teach computer science!
              I built this website using React and Bootstrap.
              Feel free to take a look around!
            </p>
          </Col>
          <Col className='backgroundtest'>
            <h1 className='h1test'>John Nam</h1>
            <h2 className='h2test'>Welcome to my portfolio website!</h2>
            <p className='ptest'>
              My name is John and I teach computer science!
              I built this website using React and Bootstrap.
              Feel free to take a look around!
            </p>
          </Col>
          <Col className='backgroundtest2'>
            <h1 className='h1test2'>John Nam</h1>
            <h2 className='h2test2'>Welcome to my portfolio website!</h2>
            <p className='ptest2'>
              My name is John and I teach computer science!
              I built this website using React and Bootstrap.
              Feel free to take a look around!
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ColorTest