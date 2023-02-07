import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container>
      <Row id='ContactSection' className='align-items-center mt-3'>
        <Col sm={{ span: 6, offset: 3 }}>
          <p className='paragraphs' style={{ color: '#00adb5' }}>Contact<hr /></p>
        </Col>
        <Col sm={{ span: 6, offset: 3 }}>
          <h2 className='smallerProjectHeadings'>Lets get in touch!</h2>
          <p className='paragraphs'>
            My name is John and I teach computer science!
            I built this website using React and Bootstrap.
            Feel free to take a look around!
          </p>
          <button className='button'>Check out my stuff!</button>
        </Col>
        <Row>
          <Col className='mt-5' style={{ textAlign: 'center' }} >
            <p className='paragraphs'>© 2023 John Nam<br />
              <a href='https://github.com/johnnam1121'>Github Repo</a></p>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default Footer
