import React, { Component } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import ModalPictures from './ModalPictures'

class Projects extends Component {
  render() {
    return (
      <Container fluid id='ProjectsSection' className='shadow-sm '>
        <Row className='mt-5 '>
          <Col md={{ span: 8, offset: 2 }}>
            <p className='paragraphs' style={{ color: '#00adb5' }}>Things I've Done <hr /></p>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col className='mb-5' md={{ span: 4, offset: 2 }}>
            <ModalPictures
              img={process.env.PUBLIC_URL + "/Pictures/job scraper.png"}
              alt='job scraper vscode pic'
              title='Job Post Website Scraper'
              body='Job post website scraper using python and beautifulsoup4 and selenium to run some scripts. The goal is to have the program search
              through specific website of some companies websites and find jobs that are relevant to me to apply to. It will search job titles based on
              some keywords and print the title, location, and link to apply.
              This is more efficient for me than scanning through indeed or linkedin which has a lot of unrelated/spammy jobs.
              Each python file is made specifically for each job site since each site uses different html names and etc. Therefore,
              I made a batch file which will run all the python files at once. Once I get each python file set up for all the companies
              I would like to work for, I will add a feature to save the printed info into a csv file for ease of use.
              Also, if I will try to add a feature where it runs daily at 8am. No idea how I would start that though..'
            />
          </Col>
          <Col className='mt-2' md={{ span: '4' }}>
            <h1 className='projectHeadings'>Current Project</h1>
            <h2 className='smallerProjectHeadings'>
              Job Post Website Scraper
            </h2>
            <ul className='projectParagraphs'>
              <li>This project is being built using Python with Beautiful Soup Method. Python is a language I do not have much
                experience with so I find this a good way to get some practice.</li>
              <li>Click the image for more info!</li>
            </ul>
            <p className='projectParagraphs'>
              Job Post Scraper Repo <a href="https://github.com/johnnam1121/job-post-scraper" target="_blank" rel="noopener noreferrer">here</a>
              <hr /></p>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col className='mb-5' md={{ span: 4, offset: 2 }}>
            <ModalPictures
              img={process.env.PUBLIC_URL + "/Pictures/starcraft.png"}
              alt='starcraft png'
              title='Starcraft 2 Unit Counter'
              body='One of the games I enjoy playing is SC2. Since I stuggle with unit composition in the game, I wanted to make a visual, interactive cheatsheet
              The webapp contains a units list page, a individual unit counter page that the player can interact with, and a team composition page to counter common team compositions.
              The content and images were sourced from Carbot Animations, Liquidpedia, Osiris SC2 Guide, and from the game SC2 itself.'
            />
          </Col>
          <Col className='mt-2' md={{ span: '4' }}>
            <h1 className='projectHeadings'>Starcraft 2</h1>
            <h2 className='smallerProjectHeadings'>
              Starcraft 2 Unit Counter
            </h2>
            <ul className='projectParagraphs'>
              <li>Built using React and Bootstrap</li>
              <li>Click the image for more info!</li>
            </ul>
            <p className='projectParagraphs'>
              Live page <a href="https://johntrieseverything.github.io/starcraft2-unit-counter" target="_blank" rel="noopener noreferrer">here</a><br />
              Starcraft 2 Unit Counter GitHub Repo <a href="https://github.com/johnnam1121/starcraft2-unit-counter" target="_blank" rel="noopener noreferrer">here</a>
              <hr /></p>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col className='mb-5' md={{ span: 4, offset: 2 }}>
            <ModalPictures
              img={process.env.PUBLIC_URL + "/Pictures/littleLemon.png"}
              alt='Little Lemon'
              title='Little Lemon'
              body='Created using the fake clients requirements through Metas
              certification course for front-end development
              Some of the requirements were to develop a home page and a reservation page
              The reservation form requires client-side validation before submitting
              The layout of the website was created using Figma'
            />
          </Col>
          <Col className='mt-2' md={{ span: 4 }}>
            <h1 className='projectHeadings'>Little Lemon</h1>
            <h2 className='smallerProjectHeadings'>
              Little Lemon Restaurant's Website
            </h2>
            <ul className='projectParagraphs'>
              <li>Built using React and Bootstrap. All assets were provided by meta</li>
              <li>Click the image for more info!</li>
            </ul>
            <p className='projectParagraphs'>
              Live page <a href="https://johnnam1121.github.io/littleLemon" target="_blank" rel="noopener noreferrer">here</a><br />
              Little Lemon GitHub Repo <a href="https://github.com/johnnam1121/littleLemon" target="_blank" rel="noopener noreferrer">here</a>
              <hr /></p>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col className='mb-5' md={{ span: 4, offset: 2 }}>
            <ModalPictures
              img={process.env.PUBLIC_URL + "/Pictures/IGNPic4.png"}
              alt='IGNPic4'
              title='IGN Video Player'
              body='IGNs API has a CORS restriction so I have my program check if the user can access the API. If not, it shows this page which
              redirects to another page that grants temporary access. Has a main video player which includes a title, description, and tags. On the right is a suggested
              video playlist An accordian which shows a load more list of suggested videos was implemented. Some features include, on click - play
              selected video, on video over - play next video, on hover-scale suggested video for user friendlyness.'
            />
          </Col>
          <Col className='mt-2' md={{ span: 4 }}>
            <h1 className='projectHeadings'>IGN Code Foo</h1>
            <h2 className='smallerProjectHeadings'>
              Video Player Webapp
            </h2>
            <ul className='projectParagraphs'>
              <li>Created a video player using react and bootstrap for IGN's code foo project</li>
              <li>Click the image for more info!</li>
            </ul>
            <p className='projectParagraphs'>
              IGN Code Foo GitHub Repo <a href="https://github.com/johnnam1121/ignwebapp" target="_blank" rel="noopener noreferrer">here</a>
              <hr /></p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='mb-5' md={{ span: 4, offset: 2 }}>
            <ModalPictures
              img={process.env.PUBLIC_URL + "/Pictures/SISPic1.png"}
              alt='SISPic1'
              title='SIS Today Newspaper'
              body='The goal was not only to build a website for the schools newspaper, but to also
              see the difference between using a website builder and building a website from scratch
              This website has a home page for latest posts and another page to show previous posts sorted by date
              The website was used as an opportunity for students to learn how to use website builders. It is now moderated by the students'
            />
          </Col>
          <Col className="mt-2" md={{ span: 4 }}>
            <h1 className='projectHeadings'>SIS Today Newspaper Site</h1>
            <h2 className='smallerProjectHeadings'>
              School Newspaper's Website
            </h2>
            <ul className='projectParagraphs'>
              <li>This website was created using WordPress</li>
              <li>Click the image for more info!</li>
            </ul>
            <p className='projectParagraphs'>
              SIS Today Newspaper Website <a href="https://sistodaynews.wordpress.com/" target="_blank" rel="noopener noreferrer">here</a>
              <hr /></p>
          </Col>
        </Row>
      </Container >
    )
  }
}

export default Projects