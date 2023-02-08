import React from 'react';
import { Col } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function SideBar() {
  return (
    <Col className='sideBar p-1 shadow-lg'>
      <nav className="navbar">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <p className='paragraphs' style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>JohnNam93@gmail.com</p>
          </li> */}
          <li className="nav-item">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johnnam1121"><FaGithub className='iconSpacing' size="2vw" /></a>
          </li>
          <li className="nav-item">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/johnnam93/"><FaLinkedin className='iconSpacing' size="2vw" /></a>
          </li>
          <li className="nav-item">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/john.nam.98/"><FaFacebook className='iconSpacing' size="2vw" /></a>
          </li>
          <li className="nav-item">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/johnnam93/"><FaInstagram className='iconSpacing' size="2vw" /></a>
          </li>
        </ul>
      </nav>
    </Col>
  )
}

export default SideBar