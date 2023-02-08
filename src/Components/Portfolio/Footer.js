import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid style={{ height: '80vh' }} >
      <Row id='ContactSection' className='align-items-center mt-3' style={{ padding: '20vh' }}>
        <Col sm={{ span: 6, offset: 3 }}>
          <p className='paragraphs' style={{ color: '#00adb5' }}>Contact<hr /></p>
          <h2 className='smallerProjectHeadings'>Let's get in touch!</h2>
          <p className='paragraphs'>
            My name is John and I teach computer science!
            I built this website using React and Bootstrap.
            Feel free to take a look around!
          </p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/johnnam1121"><button className='button'>Check out my stuff!</button></a>
        </Col>
      </Row>
      <Row className='align-items-center mt-5' >
        <Col sm={{ offset: 5 }}>
          <p className='paragraphs'>© 2023 John Nam<br />
            <a href='https://github.com/johnnam1121'>Github Repo</a></p>
        </Col>
      </Row>
    </Container >
  )
}

export default Footer
