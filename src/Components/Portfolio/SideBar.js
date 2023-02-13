import React from 'react';
import { Col } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function SideBar() {
  return (
    <Col className='sideBar p-1 shadow-sm'>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johnnam1121"><FaGithub className='icon' size="25px" /></a>
          </li>
          <li className="nav-item">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/johnnam93/"><FaLinkedin className='icon' size="25px" /></a>
          </li>
          <li className="nav-item">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/john.nam.98/"><FaFacebook className='icon' size="25px" /></a>
          </li>
          <li className="nav-item">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/johnnam93/"><FaInstagram className='icon' size="25px" /></a>
          </li>
        </ul>
      </nav>
    </Col>
  )
}

export default SideBar