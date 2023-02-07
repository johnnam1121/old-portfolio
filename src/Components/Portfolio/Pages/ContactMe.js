import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from '../TopBar';
import MiddleBar from '../MiddleBar';

class ContactMe extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <TopBar />
          <Row className='mt-3 mb-4'>
            <Col sm={1}></Col>
            <Col>
              <h1 className='title'>Contact Me</h1>
            </Col>
          </Row>
          <MiddleBar />
          <Row className='mt-5'>
            <Col sm={1}></Col>
            <Col>
              <h2 className='headings'>Here are some ways to contact me</h2>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col sm={1}></Col>
            <Col>
              <h3 className='smallerHeadings'>Email</h3>
              <p className='paragraph' style={{ fontSize: "3vh" }} >johnnam93@gmail.com</p>
            </Col>
            <Col>
              <h3 className='smallerHeadings'>Work Phone</h3>
              <p className='paragraph' style={{ fontSize: "3vh" }} >(832) 384-4331</p>
            </Col>
            <Col>
              <h3 className='smallerHeadings'>Phone</h3>
              <p className='paragraph' style={{ fontSize: "3vh" }} >(832) 455-7478</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ContactMe

{/* <Col className="p-3 m-3 component">
<h1 style={{color: "#083d5c"}}>Email</h1>
<ul style={{color: "#ECF7FB"}}>
  <li>
    <i class="bi bi-envelope"></i> Personal: Johnnam93@gmail.com
  </li>
  <li>
    <i class="bi bi-envelope"></i> Work: p00149429@houstonisd.org
  </li>
</ul>
</Col>
<Col className="p-3 m-3 component">
<h1 style={{color: "#083d5c"}}>Phone</h1>
<ul style={{color: "#ECF7FB"}}>
  <li>  
    <i class="bi bi-phone"></i> Mobile: (832) 455-7478
  </li>
  <li>
    <i class="bi bi-phone"></i> Work: (832) 384-4331
  </li>
</ul>
</Col>
<Col className="p-3 m-3 component">
<h1 style={{color: "#083d5c"}}>Social Media</h1>
<ul style={{color: "#ECF7FB"}}>
  <li><i class="bi bi-facebook"></i><a href="https://www.facebook.com/john.nam.98/" target="_blank"> Facebook</a></li>
  <li><i class="bi bi-linkedin"></i><a href="https://www.linkedin.com/in/johnnam93" target="_blank"> LinkedIn</a></li>
  <li><i class="bi bi-github"></i><a href="https://github.com/johntrieseverything/johntrieseverything.github.io" target="_blank"> GitHub</a></li>
</ul>
</Col> */}
