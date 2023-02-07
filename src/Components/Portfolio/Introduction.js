import React, { Component } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

class Introduction extends Component {
  render() {
    return (
      <Container fluid style={{ height: '100vh' }} className='shadow-sm mb-5'>
        <Row id='IntroSection' className='mb-2' >
          <Col md={{ span: 6, offset: 2 }}>
            <p className='paragraphs' style={{ color: '#00adb5' }}>A Little About Me..<hr /></p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={{ span: 4, offset: 2 }}>
            <p className='paragraphs'>Long paragraphLong paragraphLong paragraphLong paragraphLong paragraphLong paragraph
              Long paragraphLong paragraphLong paragraphLong paragraphLong paragraph
              Long paragraphLong paragraphLong paragraphLong paragraphLong paragraphLong paragraphLong paragraph
              Long paragraphLong paragraphLong paragraphLong paragraphLong paragraph
              Long paragraphLong paragraphLong paragraphLong paragraph
            </p>
            <Row >
              <Col>
                <ul className='paragraphs'>
                  <li>React</li>
                  <li>Javascript</li>
                </ul>
              </Col>
              <Col >
                <ul className='paragraphs'>
                  <li>React</li>
                  <li>Javascript</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 4 }}>
            <Image
              className='mainImg'
              src={process.env.PUBLIC_URL + "/Pictures/ProfilePic.jpg"}
              alt="Dogs photo" />
          </Col>
        </Row>
      </Container >
    )
  }
}

export default Introduction