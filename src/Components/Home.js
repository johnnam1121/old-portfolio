import React, { Component } from 'react'
import { Col, Container, Image, Row, Card } from 'react-bootstrap'
import MiddleBar from './MiddleBar';
import TopBar from './TopBar';

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <TopBar />
        </Row>
        <Row className='mt-5' >
          <Col sm={{ span: 4, offset: 2 }}>
            <h1 className='title'>Welcome!</h1>
            <p className='paragraph'>My name is John Nam and welcome to my portfolio website.
              This website was created using React and Bootstrap.
              Feel free to take a look around!</p>
          </Col>
          <Col sm={{ span: 4, offset: 1 }}>
            <Image className='mainImg' src={process.env.PUBLIC_URL + "/Pictures/ProfilePic.jpg"} alt="Profile Pic" />
          </Col>
        </Row>
        <Row className='mt-5'>
          <MiddleBar />
        </Row>
        <Row className='mt-5'>
          <Col className='imgContainer' lg={{ span: 3, offset: 1 }}>
            <Image className='extraImg' src={process.env.PUBLIC_URL + "/Pictures/SunsetPic.jpg"} alt="Profile Pic" />
          </Col>
          <Col className='imgContainer' lg={{ span: 2, offset: 1 }}>
            <Image className='extraImg' src={process.env.PUBLIC_URL + "/Pictures/TiffGrad.jpg"} alt="Profile Pic" />
          </Col>
          <Col className='imgContainer' lg={{ span: 3, offset: 1 }}>
            <Image className='extraImg' src={process.env.PUBLIC_URL + "/Pictures/TexansPic.jpg"} alt="Profile Pic" />
          </Col>
        </Row>
      </Container>

    )
  }
}

export default Home