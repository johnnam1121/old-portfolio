import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';


function TabExperience() {
  return (
    <Tab.Container defaultActiveKey="first" >
      <Container id="ExperienceSection" fluid style={{ height: '100vh' }} className='shadow-sm mb-5'>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <p className='paragraphs' style={{ color: '#00adb5' }}>Experience <hr /></p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='tabButton' sm={{ span: 2, offset: 3 }}>
            <Nav fill variant='tabs' defaultActiveKey="/home" className="flex-column">
              <Nav.Item >
                <Nav.Link
                  style={{ backgroundColor: '#393e46', color: '#eeeeee', marginBottom: '1vh', marginTop: '1vh' }}
                  className='tab' eventKey="first">Sharpsptown International School</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  style={{ backgroundColor: '#393e46', color: '#eeeeee', marginBottom: '1vh' }}
                  className='tab' eventKey="second">SCS Deli LLC</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  style={{ backgroundColor: '#393e46', color: '#eeeeee', marginBottom: '1vh' }}
                  className='tab' eventKey="thir">The University of Texas at Austin</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className='nav-pills' sm={{ span: 4 }}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h4 style={{ color: '#eeeeee' }}>Computer Science Teacher</h4>
                <h6 style={{ color: '#bbbbbb' }}>July 2020 - Present</h6>
                <ul style={{ color: '#777777' }}>
                  <li>This is some textThis is some textThis is some textThis is some textThis is some textThis is some text</li>
                  <li>This is some textThis is some textThis is some textThis is some textThis is some textThis is some text</li>
                  <li>This is some textThis is some textThis is some textThis is some textThis is some textThis is some text</li>
                </ul>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>This is a test</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </Tab.Container>
  );
}

export default TabExperience