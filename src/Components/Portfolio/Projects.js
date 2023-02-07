import React, { Component } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'


class Projects extends Component {
  render() {
    return (
      <Container fluid id='ProjectsSection' className='shadow-sm mb-5'>
        <Row className='mt-5 mb-3'>
          <Col>
            <p className='paragraphs' style={{ color: '#00adb5' }}>Things I've Done <hr /></p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={{ span: 5, offset: 1 }}>
            <Image className='projectImg'
              src={process.env.PUBLIC_URL + "/Pictures/littleLemon.png"}
              alt="IGNPic4"
            />
          </Col>
          <Col>
            <h1 className='projectHeadings'>Little Lemon</h1>
            <h2 className='smallerProjectHeadings'>
              This is a video player web app I made for IGN's code foo application using React and Bootstrap
            </h2>
            <ul className='projectParagraphs'>
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
            <p className='projectParagraphs'>
              GitHub Repo <a href="https://github.com/johntrieseverything/ignwebapp" target="_blank">here</a>
            </p>

          </Col>
        </Row>

        <Row className='mb-5'>
          <Col md={{ span: 5, offset: 1 }}>
            <h1 className='projectHeadings'>IGN Code Foo</h1>
            <h2 className='smallerProjectHeadings'>
              This is a video player web app I made for IGN's code foo application using React and Bootstrap
            </h2>
            <ul className='projectParagraphs'>
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
          </Col>
          <Col>
            <Image className='projectImg'
              src={process.env.PUBLIC_URL + "/Pictures/IGNPic4.png"}
              alt="IGNPic4"
            />
          </Col>
        </Row>


        <Row className='mb-5'>
          <Col md={{ span: 5, offset: 1 }}>
            <Image className='projectImg'
              src={process.env.PUBLIC_URL + "/Pictures/SISPic1.png"}
              alt="SISPic1"
            />
          </Col>
          <Col>
            <h1 className='projectHeadings'>SIS Today Newspaper Site</h1>
            <h2 className='smallerProjectHeadings'>
              This is a website I created for my schools newspaper club using WordPress
            </h2>
            <ul className='projectParagraphs'>
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
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Projects