import React, { Component } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'


class Projects extends Component {
  render() {
    return (
      <Container fluid id='ProjectsSection' className='shadow-sm mb-5'>
        <Row className='mt-5 mb-5'>
          <Col sm={{ span: 8, offset: 2 }}>
            <p className='paragraphs' style={{ color: '#00adb5' }}>Things I've Done <hr /></p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='mb-5' sm={{ span: 5, offset: 1 }}>
            <Image className='projectImg'
              src={process.env.PUBLIC_URL + "/Pictures/starcraft.png"}
              alt="IGNPic4"
            />
          </Col>
          <Col className='mb-5'>
            <h1 className='projectHeadings'>Current Project</h1>
            <h2 className='smallerProjectHeadings'>
              Starcraft 2 Unit Counter
            </h2>
            <ul className='projectParagraphs'>
              <li>Built using React and Bootstrap</li>
              <li>One of the games I enjoy playing is SC2. Since I stuggle with unit composition in the game, I wanted to make a visual, interactive cheatsheet</li>
              <li>The webapp contains a units list page, a individual unit counter page that the player can interact with, and a team composition page to counter common team compositions.</li>
              <li>The content and images were sourced from Carbot Animations, Liquidpedia, Osiris SC2 Guide, and from the game SC2 itself.</li>
            </ul>
            <p className='projectParagraphs'>
              Starcraft 2 Unit Counter GitHub Repo <a href="https://github.com/johnnam1121/starcraft2-unit-counter" target="_blank" rel="noopener noreferrer">here</a>
              <hr /></p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='mb-5' sm={{ span: 5, offset: 1 }}>
            <Image className='projectImg'
              src={process.env.PUBLIC_URL + "/Pictures/littleLemon.png"}
              alt="IGNPic4"
            />
          </Col>
          <Col className='mb-5'>
            <h1 className='projectHeadings'>Little Lemon</h1>
            <h2 className='smallerProjectHeadings'>
              Little Lemon Restaurant's Website
            </h2>
            <ul className='projectParagraphs'>
              <li>Built using React and Bootstrap</li>
              <li>Created using the 'clients' requirements through Meta's
                certification course for front-end development
              </li>
              <li>Some of the requirements were to develop a home page and a reservation page</li>
              <li>The reservation form requires client-side validation before submitting</li>
              <li>The layout of the website was created using Figma</li>
            </ul>
            <p className='projectParagraphs'>
              Little Lemon GitHub Repo <a href="https://github.com/johnnam1121/littleLemon" target="_blank" rel="noopener noreferrer">here</a>
              <hr /></p>
          </Col>
        </Row>
        <Row>
          <Col className='mb-5 mt-5' sm={{ span: 5, offset: 1 }}>
            <Image className='projectImg'
              src={process.env.PUBLIC_URL + "/Pictures/IGNPic4.png"}
              alt="IGNPic4"
            />
          </Col>
          <Col className='mb-5 mt-5'>
            <h1 className='projectHeadings'>IGN Code Foo</h1>
            <h2 className='smallerProjectHeadings'>
              Video Player Webapp for IGN's Code Foo
            </h2>
            <ul className='projectParagraphs'>
              <li>IGN's API has a CORS restriction so I have my program check
                if the user can access the API. If not, it shows this page which
                redirects to another page that grants temporary access</li>
              <li>Has a main video player which
                includes a title, description, and tags. On the right is a suggested
                video playlist</li>
              <li> An accordian which shows a load
                more list of suggested videos was implemented</li>
              <li>Some features include, on click - play
                selected video, on video over - play next video, on hover -
                scale suggested video for user friendlyness.</li>
            </ul>
            <p className='projectParagraphs'>
              IGN Code Foo GitHub Repo <a href="https://github.com/johntrieseverything/ignwebapp" target="_blank" rel="noopener noreferrer">here</a>
              <hr /></p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='mb-5 mt-5' sm={{ span: 5, offset: 1 }}>
            <Image className='projectImg'
              src={process.env.PUBLIC_URL + "/Pictures/SISPic1.png"}
              alt="SISPic1"
            />
          </Col>
          <Col className='mb-5 mt-5'>
            <h1 className='projectHeadings'>SIS Today Newspaper Site</h1>
            <h2 className='smallerProjectHeadings'>
              School Newspaper's Website
            </h2>
            <ul className='projectParagraphs'>
              <li>This website was created using WordPress</li>
              <li>The goal was not only to build a website for the schools newspaper, but to also
                see the difference between using a website builder and building a website from scratch
              </li>
              <li>This website has a home page for latest posts and another page to show previous posts sorted by date</li>
              <li>The website was used as an opportunity for students to learn how to use website builders. It is now moderated by the students</li>
            </ul>
            <p className='projectParagraphs'>
              SIS Today Newspaper Website <a href="https://sistodaynews.wordpress.com/" target="_blank" rel="noopener noreferrer">here</a>
              <hr /></p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Projects