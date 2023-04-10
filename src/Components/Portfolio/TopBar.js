import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import pdf from './John Nam Resume.docx';

function TopBar() {
  return (
    <Container fluid >
      <Row className='shadow-lg align-items-center topbar'>
        <Col>
          <Navbar.Brand href="/portfolio/">
            <img src={process.env.PUBLIC_URL + "/Pictures/JNlogo.png"} alt="logo" width="30" height="30" className="d-inline-block align-top rounded" />
          </Navbar.Brand>
        </Col>
        <Col className='d-flex justify-content-end'>
          <nav id="header-nav" className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="navbar-nav">
                <li className='scrollLink'><Link activeClass="active" to="IntroSection" smooth={false} duration={1000} offset={-100}>About Me</Link></li>
                <li className='scrollLink'><Link activeClass="active" to="ExperienceSection" smooth={false} duration={1000} offset={-100}>Experience</Link></li>
                <li className='scrollLink'><Link activeClass="active" to="ProjectsSection" smooth={false} duration={1000} offset={-100}>Projects</Link></li>
                <li className='scrollLink'><Link activeClass="active" to="ContactSection" smooth={false} duration={1000} offset={-100}>Contact Me</Link></li>
                <li className='scrollLink'><a target="_blank" rel="noopener noreferrer" href={pdf}><button className='button'>My Resume</button></a></li>
              </ul>
            </div>
          </nav>
        </Col>
      </Row>
    </Container >
  )
}

export default TopBar

