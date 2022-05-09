import React, { Component, useState } from 'react'
import { Col, Container, Image, Row, Modal, Card } from 'react-bootstrap'
import MiddleBar from './MiddleBar';
import ModalPictures from './ModalPictures';
import TopBar from './TopBar';

class MyWorks extends Component {

  render() {
    return (
      <Container>
        <TopBar />
        <Row className='mt-3 mb-5'>
          <h1 className='title'>My Projects</h1>
          <p className='paragraph'>Below are some of the projects that I've worked on.</p>
        </Row>
        <MiddleBar />
        <Row className='mt-5'>
          <h1 className='headings'>IGN Code Foo Video Player</h1>
        </Row>
        <Row className='mt-3' >
          <Col sm={9}>
            <Col>
              <Image className='projectImg'
                src={process.env.PUBLIC_URL + "/Pictures/IGNPic1.png"}
                alt="IGNPic1"
              />
              <Image className='projectImg'
                src={process.env.PUBLIC_URL + "/Pictures/IGNPic2.png"}
                alt="IGNPic2"
              />
            </Col>
            <Col>
              <Image className='projectImg'
                src={process.env.PUBLIC_URL + "/Pictures/IGNPic3.png"}
                alt="IGNPic3"
              />
              <Image className='projectImg'
                src={process.env.PUBLIC_URL + "/Pictures/IGNPic4.png"}
                alt="IGNPic4"
              />
            </Col>
          </Col>
          <Col className='paragraph' style={{ fontSize: '2vh' }} sm={3}>
            <p>This is a video player web app I made for IGN's code foo application using React and Bootstrap</p>
            <ul>
              <li>Top-Left: IGN's API has a CORS restriction so I have my program check
                if the user can access the API. If not, it shows this page which
                redirects to another page that grants temporary access</li>
              <li>Top-Right: What the main page looks like. Has a main video player which
                includes a title, description, and tags. On the right is a suggested
                video playlist</li>
              <li>Bottom-Left: An accordian which shows a load
                more list of suggested videos</li>
              <li>Bottom-Right: Some features include, on click - play
                selected video, on video over - play next video, on hover -
                scale suggested video for user friendlyness.</li>
            </ul>
            <p>Check out the website <a href="https://johnnam1121.github.io/johnnam" target="_blank">here</a></p>
            <p>GitHub Repo <a href="https://github.com/johnnam1121/johnnam" target="_blank">here</a></p>
          </Col>
        </Row>

        <Row className='mt-5'>
          <h1 className='headings'>SIS Today Newspaper Site </h1>
        </Row>
        <Row className='mt-3 mb-3'>
          <Col sm={9}>
            <Col>
              <Image className='projectImg'
                src={process.env.PUBLIC_URL + "/Pictures/SISPic1.png"}
                alt="SISPic1"
              />
              <Image className='projectImg'
                src={process.env.PUBLIC_URL + "/Pictures/SISPic2.png"}
                alt="SISPic2"
              />
            </Col>
            <Col>
              <Image className='projectImg'
                src={process.env.PUBLIC_URL + "/Pictures/SISPic3.png"}
                alt="SISPic3"
              />
              <Image className='projectImg'
                src={process.env.PUBLIC_URL + "/Pictures/SISPic4.png"}
                alt="SISPic4"
              />
            </Col>
          </Col>
          <Col className='paragraph' style={{ fontSize: '2vh' }} sm={3}>
            <p>This is a website I created for my schools newspaper club using WordPress</p>
            <ul>
              <li>Top-Left: Home page</li>
              <li>Top-Right: Posts page which includes each page of each months newspaper</li>
              <li>Bottom-Left: Staff page</li>
              <li>Bottom-Right: Clickable links to each month's post</li>
            </ul>
            <p>Check out the website <a href="https://sistodaynews.wordpress.com/" target="_blank">here</a></p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MyWorks