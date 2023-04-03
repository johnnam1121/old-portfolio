import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import FadeIntoView from './Portfolio/FadeIntoView';
import Footer from './Portfolio/Footer';
import Introduction from './Portfolio/Introduction';
import LandingPage from './Portfolio/LandingPage';
import './Portfolio/Portfolio.css';
import Projects from './Portfolio/Projects';
import SideBar from './Portfolio/SideBar';
import TabExperience from './Portfolio/TabExperience';
import TopBar from './Portfolio/TopBar';
import TopButton from './Portfolio/TopButton';

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
