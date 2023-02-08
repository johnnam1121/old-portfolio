import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import pdf from './John Nam Resume.pdf';

function TopBar() {
  return (
    <Container fluid >
      {/* #222831' */}
      <Row>
        <Row className='shadow-lg p-1 align-items-center' style={{ width: '100%', position: 'fixed', backgroundColor: '#222831' }}>
          <Col>
            <Navbar.Brand href="/portfolio/">
              <img src={process.env.PUBLIC_URL + "/Pictures/JNlogo.png"} alt="logo" width="30" height="30" className="d-inline-block align-top rounded" />{' '}
            </Navbar.Brand>
          </Col>
          <Col className='mt-1 pt-2'>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
              <li className='scrollLink'><Link activeClass="active" to="IntroSection" smooth={false} duration={1000} offset={-100}>About Me</Link></li>
              <li className='scrollLink'><Link activeClass="active" to="ExperienceSection" smooth={false} duration={1000} offset={-100}>Experience</Link></li>
              <li className='scrollLink'><Link activeClass="active" to="ProjectsSection" smooth={false} duration={1000} offset={-100}>Projects</Link></li>
              <li className='scrollLink'><Link activeClass="active" to="ContactSection" smooth={false} duration={1000} offset={-100}>Contact Me</Link></li>
              <li className='scrollLink'><a target="_blank" rel="noopener noreferrer" href={pdf}><button className='button'>My Resume</button></a></li>
            </ul>
          </Col>
        </Row>
      </Row >
    </Container>
  )
}

export default TopBar