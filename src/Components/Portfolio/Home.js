import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import FadeIntoView from './FadeIntoView';
import Footer from './Footer';
import Introduction from './Introduction';
import LandingPage from './LandingPage';
import './Portfolio.css';
import Projects from './Projects';
import SideBar from './SideBar';
import TabExperience from './TabExperience';
import TopBar from './TopBar';
import TopButton from './TopButton';

class Home extends Component {
  render() {
    return (
      <Container fluid className='background'>
        <FadeIntoView>
          <TopButton />
        </FadeIntoView>
        <FadeIntoView>
          <TopBar />
        </FadeIntoView>
        <FadeIntoView>
          <SideBar />
        </FadeIntoView>
        <Row style={{ height: '20vh' }}></Row>
        <FadeIntoView>
          <LandingPage />
        </FadeIntoView>
        <FadeIntoView>
          <Introduction />
        </FadeIntoView>
        <FadeIntoView>
          <TabExperience />
        </FadeIntoView>
        <FadeIntoView>
          <Projects />
        </FadeIntoView>
        <FadeIntoView>
          <Footer />
        </FadeIntoView>
      </Container>
    )
  }
}
export default Home

{/* <ColorTest /> */ }
