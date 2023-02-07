import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function SideBar() {
  return (
    <Container fluid className='sideBar'>
      <Col sm={{ span: 1 }}>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#"><FaGithub className='iconSpacing' size="2vw" /></a>
            </li>
            <li className="nav-item">
              <a href="#"><FaLinkedin className='iconSpacing' size="2vw"/></a>
            </li>
            <li className="nav-item">
              <a href="#"><FaFacebook className='iconSpacing' size="2vw"/></a>
            </li>
            <li className="nav-item">
              <a href="#"><FaInstagram className='iconSpacing' size="2vw"/></a>
            </li>
          </ul>
        </nav>
      </Col>
    </Container>
  )
}

export default SideBar