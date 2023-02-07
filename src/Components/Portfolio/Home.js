import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import SideBar from './SideBar';
import ColorTest from './ColorTest';
import Footer from './Footer';
import Introduction from './Introduction';
import LandingPage from './LandingPage';
import './Portfolio.css';
import Projects from './Projects';
import TabExperience from './TabExperience';
import TopBar from './TopBar';
import TopButton from './TopButton';

class Home extends Component {
  render() {
    return (
      <Container fluid className='background'>
        <TopBar />
        <SideBar />
        <Row style={{ height: '20vh' }}></Row>
        <LandingPage />
        <Introduction />
        <TabExperience />
        {/* <Experience /> */}
        <Projects />
        <ColorTest />
        <TopButton />
        <Footer />
      </Container>
    )
  }
}
export default Home