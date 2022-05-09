import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

import AboutMe from './Components/AboutMe';
import MyWorks from './Components/MyWorks';
import ContactMe from './Components/ContactMe';
import TopBar from './Components/TopBar';
import MiddleBar from './Components/MiddleBar';

function App() {
  return (
    <div className='background'>
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
          {/* <ReactPhotoCollage {...photoCollegeOne} /> */}
        </Row>
      </Container>
    </div >
  );
}

const photoCollegeOne = {
  width: '9000px',
  height: ['500px', '170px'],
  layout: [4],
  photos: [
    { source: '{process.env.PUBLIC_URL + "/Pictures/ProfilePic.jpg"}' },
    { source: 'https://picsum.photos/200' },
    { source: 'https://picsum.photos/200' },
    { source: 'https://picsum.photos/200' },
  ],
  showNumOfRemainingPhotos: true
};

export default App;