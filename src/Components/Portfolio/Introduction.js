import React, { Component } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

class Introduction extends Component {
  render() {
    return (
      <Container fluid className='shadow-sm mb-5'>
        <Row id='IntroSection' className='mb-2' >
          <Col md={{ span: 6, offset: 3 }}>
            <p className='paragraphs' style={{ color: '#00adb5' }}>A Little About Me..<hr /></p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={{ span: 4, offset: 3 }}>
            <p className='paragraphs'>After graduating with a Bachelor's in Electrical and Computer Engineering from
              The University of Texas at Austin, I took quite an unorthodox career path. I started my career by opening
              a business franchise called Schlotzsky's where I learned all the ins and outs of a business. After some time,
              I was encouraged by my sister to pursue teaching which is where I am now. I've been teaching computer science
              for about 3 years now and am enjoying it very much! I am however, still open to broadening my horizens and am open
              to offers. Feel free to send me an email if you'd like to chat!
            </p>
            <Row >
              <p className='paragraphs'>Here are some of my related skills </p>
              <Col>
                <ul className='paragraphs'>
                  <li>React</li>
                  <li>Bootstrap</li>
                </ul>
              </Col>
              <Col >
                <ul className='paragraphs'>
                  <li>HTML</li>
                  <li>CSS</li>
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