import React, { Component } from 'react'
import { Col, Container, Image, Row, Card } from 'react-bootstrap'
import MiddleBar from './MiddleBar';
import ModalPictures from './ModalPictures';
import TopBar from './TopBar';

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <TopBar />
        <Row className='mt-5 mb-3' >
          <Col sm={{ span: 4, offset: 1 }}>
            <Image
              className='mainImg'
              src={process.env.PUBLIC_URL + "/Pictures/Dogs.jpg"}
              alt="Dogs photo" />
            <p className='paragraph' style={{ fontSize: '10px' }}>Here is a picture of my dogs for your viewing pleasure</p>
          </Col>
          <Col sm={{ span: 4, offset: 1 }}>
            <h1 className='title'>Experience</h1>
            <p className='paragraph'>Below is my school and work history. I am looking forward to adding a new career to this page! </p>
          </Col>
        </Row>
        <MiddleBar />
        <Row className='mt-3'>
          <h1 className='headings'>Career Timeline</h1>
        </Row>
        <Row xs={1} md={3} >
          <Card >
            <Card.Body>
              <Card.Title className='headings'>UT Austin</Card.Title>
              <Card.Text className='paragraph'>
                Austin, TX
                <br />
                2012-2017
              </Card.Text>
            </Card.Body>
          </Card>
          <Card >
            <Card.Body>
              <Card.Title className='headings'>SCS Deli LLC</Card.Title>
              <Card.Text className='paragraph'>
                Houston, TX
                <br />
                2018-2019
              </Card.Text>
            </Card.Body>
          </Card>
          <Card >
            <Card.Body>
              <Card.Title className='headings'>Sharpstown Intl School</Card.Title>
              <Card.Text className='paragraph'>
                Houston, TX
                <br />
                2020-Present
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        <Row className='mt-5' ><h1 className='headings'>Sharpstown International School</h1></Row>
        <Row className='mt-3'>
          <Col className='imgContainer' lg={6} >
            <Image
              className="mainImg"
              src={process.env.PUBLIC_URL + "/Pictures/NCWIT.jpeg"}
              alt="Main SIS Picture"
              style={{ height: "100vh" }}
            />
          </Col>
          <Col className='paragraph' style={{ fontSize: "3vh" }} lg={6}>
            <ul>
              <li>Awarded Beginning Teacher of the Year and NCWIT's AiC Educator Award Honorable Mention</li>
              <li>Teach computer science related topics including HTML,
                CSS, Javascript, networking, computer
                management/building, digital citizenship,
                animation, and game/website development</li>
              <li>Develop and implement lessons in accordance to TEA curriculum
                guidelines for students ranging from 8th to 12th
                grade</li>
              <li>Prepare AP Computer Science Principles students
                for the AP examination and the AP Performance Task to receive
                college credit</li>
              <li>Sponsor Girls Who Code to spread awareness regarding
                computer science and help close the gender gap in
                technology</li>
              <li>Mentor to-be teachers through the alternative certification process</li>
            </ul>
            <ModalPictures
              Title={"Playing Chess with a Student"}
              Image={process.env.PUBLIC_URL + "/Pictures/Chess.png"}
              AltTag={"chess"}
              Body={"One of the most important things to me as a teacher is to build positive rapport with my students. "}
            />
            <ModalPictures
              Title={"Girls Who Code Post"}
              Image={process.env.PUBLIC_URL + "/Pictures/GWCBTOY.jpg"}
              AltTag={"GWC Post"}
              Body={"I was awarded 2021-2022 beginning teacher of the year and my club created a post for me on Instagram!"}
            />
            <ModalPictures
              Title={"GWC Group Photo"}
              Image={process.env.PUBLIC_URL + "/Pictures/GWCgroup.png"}
              AltTag={"GWC Group Photo"}
              Body={"As sponsor of GWC, my goal is to help encourage girls at my school to pursue stem related careers."}
            />
            <ModalPictures
              Title={"SIS Today News"}
              Image={process.env.PUBLIC_URL + "/Pictures/SISToday.png"}
              AltTag={"SIS Today"}
              Body={"A few students and I founded SIS Today which is a newspaper club on campus."}
            />
          </Col>
        </Row>

        <Row className='mt-5' ><h1 className='headings'>SCS Deli LLC</h1></Row>
        <Row className='mt-3'>
          <Col className='imgContainer' lg={6} >
            <Image
              className="mainImg"
              src={process.env.PUBLIC_URL + "/Pictures/Opening.jpg"}
              alt="Grand Opening"
              style={{ height: "85vh" }}
            />
          </Col>
          <Col className='paragraph' style={{ fontSize: "3vh" }} lg={6}>
            <ul>
              <li>Oversaw construction of building, interior design, and installation of over $150,000 of machinery, small wares,
                furniture, and equipment</li>
              <li>Attended over 250+ training hours with corporate to learn proper operations</li>
              <li>Attended meetings with other franchisees and corporate representatives to vote on future developments</li>
              <li>Managed over $50,000 monthly in labor costs, food costs, inventory, and payroll</li>
              <li>Hired and trained 40+ staff while reducing labor costs to less than 18%</li>
              <li>Increased sales by over 20% by organizing catering and third-party deliveries</li>
            </ul>
            <ModalPictures
              Title={"Street Advertisement"}
              Image={process.env.PUBLIC_URL + "/Pictures/CarSign.jpg"}
              AltTag={"Car Signs"}
              Body={"My employees advertising the grand opening of the business during slow hours."}
            />
            <ModalPictures
              Title={"Drink Machine"}
              Image={process.env.PUBLIC_URL + "/Pictures/Drinks.jpg"}
              AltTag={"Drink Machine"}
              Body={"Preparing the drink machine for opening."}
            />
            <ModalPictures
              Title={"Thank you Sign"}
              Image={process.env.PUBLIC_URL + "/Pictures/ThankYou.jpg"}
              AltTag={"Thank you Sign"}
              Body={"Thank you sign that was installed next to the drive through"}
            />
          </Col>
        </Row>

        <Row className='mt-5' ><h1 className='headings'>The University of Texas at Austin</h1></Row>
        <Row className='mt-3 mb-3'>
          <Col className='imgContainer' lg={6} >
            <Image
              className="mainImg"
              src={process.env.PUBLIC_URL + "/Pictures/GradPhoto.jpg"}
              alt="Grad Photo"
              style={{ height: "50vh" }}
            />
          </Col>
          <Col className='paragraph' style={{ fontSize: "3vh" }} lg={6}>
            <ul>
              <li>Bachelor of Sciences in Electrical and Computer Engineering</li>
              <li>Technical Core: Energy Systems and Renewable Energy</li>
              <li>Graduated May 2017</li>
            </ul>
            <ModalPictures
              Title={"Lambda Phi Epsilon"}
              Image={process.env.PUBLIC_URL + "/Pictures/LambdaGrad.jpg"}
              AltTag={"Lambda Grad"}
              Body={"During my time at UT, I was involved in a fraternity that helped make my university experience as great as it was."}
            />
            <ModalPictures
              Title={"Asian American Culture Committee"}
              Image={process.env.PUBLIC_URL + "/Pictures/AACC.jpg"}
              AltTag={"AACC"}
              Body={"I was also involved in many other organizations like AACC where I took on leadership roles to host festivals and events like shown."}
            />
            <ModalPictures
              Title={"Circuit Theory Test"}
              Image={process.env.PUBLIC_URL + "/Pictures/CTTEST.jpg"}
              AltTag={"CTTEST"}
              Body={"When I first attended my EE classes, I struggled quite a bit. That is why when I got this 100 on a circuit theory test, I was so proud of myself"}
            />
            <ModalPictures
              Title={"My Little Brothers"}
              Image={process.env.PUBLIC_URL + "/Pictures/LilBros.jpg"}
              AltTag={"Lil Bros"}
              Body={"Some of my closest friends from University."}
            />
          </Col>
        </Row>

      </Container>
    )
  }
}

export default AboutMe