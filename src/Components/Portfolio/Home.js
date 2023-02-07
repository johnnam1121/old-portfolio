import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import ColorTest from './ColorTest';
import Experience from './Experience';
import Introduction from './Introduction';
import LandingPage from './LandingPage';
import './Portfolio.css';
import Projects from './Projects';
import TabExperience from './TabExperience';
import TopBar from './TopBar';

class Home extends Component {
  render() {
    return (
      <Container fluid className='background'>
        <TopBar />
        <Row style={{height:'20vh'}}></Row>
        <LandingPage />
        <Introduction />
        <TabExperience />
        {/* <Experience /> */}
        <Projects />
        <ColorTest />
      </Container>
      // <Container>
      //   <Row>
      //     <TopBar />
      //   </Row>
      //   <Row className='mt-5' ></Row>
      //   <Row className='mt-5' >
      //     <Col sm={{ span: 4, offset: 2 }}>
      //       <h1 className='title'>Welcome!</h1>
      //       <p className='paragraph'>My name is John Nam and welcome to my portfolio website.
      //         This website was created using React and Bootstrap.
      //         Feel free to take a look around!</p>
      //     </Col>
      //     <Col sm={{ span: 4, offset: 1 }}>
      //       <Image className='mainImg' src={process.env.PUBLIC_URL + "/Pictures/ProfilePic.jpg"} alt="Profile Pic" />
      //     </Col>
      //   </Row>
      //   <Row className='mt-5'>
      //     <MiddleBar />
      //   </Row>
      //   <Row className='mt-5 mb-5'>
      //     <Col className='imgContainer' lg={{ span: 3, offset: 1 }}>
      //       <Image className='extraImg' src={process.env.PUBLIC_URL + "/Pictures/SunsetPic.jpg"} alt="Profile Pic" />
      //     </Col>
      //     <Col className='imgContainer' lg={{ span: 2, offset: 1 }}>
      //       <Image className='extraImg' src={process.env.PUBLIC_URL + "/Pictures/TiffGrad.jpg"} alt="Profile Pic" />
      //     </Col>
      //     <Col className='imgContainer' lg={{ span: 3, offset: 1 }}>
      //       <Image className='extraImg' src={process.env.PUBLIC_URL + "/Pictures/TexansPic.jpg"} alt="Profile Pic" />
      //     </Col>
      //   </Row>
      // </Container>

    )
  }
}

export default Home