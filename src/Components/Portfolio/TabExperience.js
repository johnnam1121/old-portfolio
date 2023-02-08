import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';


function TabExperience() {
  return (
    <Tab.Container defaultActiveKey="first" >
      <Container id="ExperienceSection" fluid className='shadow-sm mb-5'>
        <Row>
          <Col sm={{ span: 6, offset: 3 }}>
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
                  className='tab' eventKey="third">The University of Texas at Austin</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className='nav-pills mt-3' sm={{ span: 4 }}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h4 style={{ color: '#eeeeee' }}>Computer Science Teacher</h4>
                <h6 style={{ color: '#bbbbbb' }}>2020 - Present</h6>
                <ul style={{ color: '#777777' }}>
                  <li>Awarded Beginning Teacher of the Year and NCWIT's AiC Educator Award Honorable Mention</li>
                  <li>Teach computer science related topics including HTML, CSS, Javascript, networking,
                    computer management/building, digital citizenship, animation, and game/website development</li>
                  <li>Develop and implement lessons in accordance to TEA curriculum
                    guidelines for students ranging from 8th to 12th grade</li>
                  <li>Prepare AP Computer Science Principles students for the AP
                    examination and the AP Performance Task to receive college credit</li>
                  <li>Sponsor Girls Who Code to spread awareness regarding
                    computer science and help close the gender gap in technology</li>
                  <li>Mentor to-be teachers through the alternative certification process</li>
                </ul>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h4 style={{ color: '#eeeeee' }}>Business Owner</h4>
                <h6 style={{ color: '#bbbbbb' }}>2018 - 2019</h6>
                <ul style={{ color: '#777777' }}>
                  <li>Oversaw construction of building, interior design, and
                    installation of over $150,000 of machinery, small wares, furniture, and equipment</li>
                  <li>Attended over 250+ training hours with corporate to learn proper operations</li>
                  <li>Attended meetings with other franchisees and corporate representatives to vote on future developments</li>
                  <li>Managed over $50,000 monthly in labor costs, food costs, inventory, and payroll</li>
                  <li>Hired and trained 40+ staff while reducing labor costs to less than 18%</li>
                  <li>Increased sales by over 20% by organizing catering and third-party deliveries</li>
                </ul>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h4 style={{ color: '#eeeeee' }}>Electrical and Computer Engineer</h4>
                <h6 style={{ color: '#bbbbbb' }}>2012 - 2017</h6>
                <ul style={{ color: '#777777' }}>
                  <li>Cockrell School of Engineering</li>
                  <li>Bachelor of Sciences in Electrical and Computer Engineering</li>
                  <li>Technical Core: Energy Systems and Renewable Energy</li>
                  <li>Graduated May 2017</li>
                </ul>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </Tab.Container >
  );
}

export default TabExperience