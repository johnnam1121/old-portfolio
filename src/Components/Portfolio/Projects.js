import React, { Component } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import ModalPictures from './ModalPictures'

class Projects extends Component {
  render() {
    return (
      <Container fluid id='ProjectsSection' className='shadow-sm'>
        <Row className='mt-5 '>
          <Col md={{ span: 8, offset: 2 }}>
            <p className='paragraphs' style={{ color: '#00adb5' }}>Things I've Done <hr /></p>
            <p className='paragraphs' >Click the images for more info!</p>
          </Col>
        </Row>
        <Carousel>
          <Carousel.Item interval={3000}>
            <ModalPictures
              img={process.env.PUBLIC_URL + "/Pictures/chat-app.png"}
              alt='chat app pic'
              title='Live Chat app'
              body='The goal of this is to create a real time chat application from scratch using react for the client side and nodejs for the server side. I am using react 
              so I can deploy it using gh-pages eventually. For the back end, I am using express to create the server and socket.IO to communicate between the client and server.
              I am doing this to get some practice using Nodejs. I am honestly kind of struggling with it since majority of the tutorials make no sense and are too complex. I am 
              trying to make it easier on myself by starting from the beginning and breaking it up into managable chunks. So far I got the client and server side communicating with each
              other. I finished the active users section and am starting to build the chat function. Breaking up the users into rooms is a little over my head right now so I will work
              on that after I finish the chat function. Once the backend is complete, I will make the app look pretty which is the easy part imo.'
              repo="https://github.com/johnnam1121/job-post-scraper"
              livepage='Unavailable'
            />
            <Carousel.Caption>
              <Row className='carouselCaption' style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }}>
                <h4>Current Project</h4>
                <h4>Live Chat app</h4>
                <p className='carouselParagraphs'>Repo <a href="https://github.com/johnnam1121/job-post-scraper" target="_blank" rel="noopener noreferrer">here</a></p>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
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
              repo="https://github.com/johnnam1121/job-post-scraper"
              livepage='Unavailable'
            />
            <Carousel.Caption>
              <Row className='carouselCaption' style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }}>
                <h4>Current Project</h4>
                <h4>Job Post Website Scraper</h4>
                <p className='carouselParagraphs'>Repo <a href="https://github.com/johnnam1121/job-post-scraper" target="_blank" rel="noopener noreferrer">here</a></p>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <ModalPictures
              img={process.env.PUBLIC_URL + "/Pictures/starcraft.png"}
              alt='starcraft png'
              title='Starcraft 2 Unit Counter'
              body='One of the games I enjoy playing is SC2. Since I stuggle with unit composition in the game, I wanted to make a visual, interactive cheatsheet
              The webapp contains a units list page, a individual unit counter page that the player can interact with, and a team composition page to counter common team compositions.
              The content and images were sourced from Carbot Animations, Liquidpedia, Osiris SC2 Guide, and from the game SC2 itself.'
              repo="https://github.com/johnnam1121/starcraft2-unit-counter"
              live="https://johntrieseverything.github.io/starcraft2-unit-counter"
              livepage='Live Page'
            />
            <Carousel.Caption>
              <Row className='carouselCaption' style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }}>
                <h4>Starcraft 2 Unit Counter</h4>
                <p className='carouselParagraphs'>
                  Live page <a href="https://johntrieseverything.github.io/starcraft2-unit-counter" target="_blank" rel="noopener noreferrer">here</a><br />
                  Starcraft 2 Unit Counter GitHub Repo <a href="https://github.com/johnnam1121/starcraft2-unit-counter" target="_blank" rel="noopener noreferrer">here</a>
                </p>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <ModalPictures
              img={process.env.PUBLIC_URL + "/Pictures/littleLemon.png"}
              alt='Little Lemon'
              title='Little Lemon'
              body='Created using the fake clients requirements through Metas
              certification course for front-end development
              Some of the requirements were to develop a home page and a reservation page
              The reservation form requires client-side validation before submitting
              The layout of the website was created using Figma'
              repo="https://github.com/johnnam1121/littleLemon"
              live="https://johnnam1121.github.io/littleLemon"
              livepage='Live Page'
            />
            <Carousel.Caption>
              <Row className='carouselCaption' style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }}>
                <h4>Little Lemon</h4>
                <p className='carouselParagraphs'>
                  Live page <a href="https://johnnam1121.github.io/littleLemon" target="_blank" rel="noopener noreferrer">here</a><br />
                  Little Lemon GitHub Repo <a href="https://github.com/johnnam1121/littleLemon" target="_blank" rel="noopener noreferrer">here</a>
                </p>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <ModalPictures
              img={process.env.PUBLIC_URL + "/Pictures/IGNPic4.png"}
              alt='IGNPic4'
              title='IGN Video Player'
              body='IGNs API has a CORS restriction so I have my program check if the user can access the API. If not, it shows this page which
              redirects to another page that grants temporary access. Has a main video player which includes a title, description, and tags. On the right is a suggested
              video playlist An accordian which shows a load more list of suggested videos was implemented. Some features include, on click - play
              selected video, on video over - play next video, on hover-scale suggested video for user friendlyness.'
              repo="https://github.com/johnnam1121/ignwebapp"
              livepage='Unavailable'
            />
            <Carousel.Caption>
              <Row className='carouselCaption' style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }}>
                <h4>IGN Video Player</h4>
                <p className='carouselParagraphs'>
                  IGN Code Foo GitHub Repo <a href="https://github.com/johnnam1121/ignwebapp" target="_blank" rel="noopener noreferrer">here</a>
                </p>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <ModalPictures
              img={process.env.PUBLIC_URL + "/Pictures/SISPic1.png"}
              alt='SISPic1'
              title='SIS Today Newspaper'
              body='The goal was not only to build a website for the schools newspaper, but to also
              see the difference between using a website builder and building a website from scratch
              This website has a home page for latest posts and another page to show previous posts sorted by date
              The website was used as an opportunity for students to learn how to use website builders. It is now moderated by the students'
              livepage='Live Page'
              live="https://sistodaynews.wordpress.com/"
            />
            <Carousel.Caption>
              <Row className='carouselCaption' style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }}>
                <h4>SIS Today Newspaper</h4>
                <p className='carouselParagraphs'>
                  SIS Today Newspaper Website <a href="https://sistodaynews.wordpress.com/" target="_blank" rel="noopener noreferrer">here</a>
                </p>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container >
    )
  }
}

export default Projects