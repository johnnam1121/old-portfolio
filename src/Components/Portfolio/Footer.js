import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid  >
      <Row id='ContactSection' className='align-items-center' style={{ marginTop: '25vh', marginBottom: '25vh' }}>
        <Col className='align-self-center' sm={{ span: 6, offset: 3 }}>
          <p className='paragraphs' style={{ color: '#00adb5' }}>Contact<hr /></p>
          <h2 className='smallerProjectHeadings'>Let's get in touch!</h2>
          <p className='paragraphs'>I'm currently enjoying my position as a computer science teacher but am open to broadening my horizons! If you would like to chat, feel free to contact me at any time!</p>
          <p className='paragraphs'>Johnnam93@gmail.com</p>
          <a href="mailto: Johnnam93@gmail.com"><button className='button'>Contact Me</button></a>
        </Col>
      </Row>
      <Row className='align-items-center mt-5' >
        <Col style={{ textAlign: 'center' }}>
          <p className='paragraphs'>Everything was written by me.
            Feel free to clone my code! <a href='https://github.com/johnnam1121'>My Github Repo</a>  <br />
            Website format inspired by: <a href='https://brittanychiang.com/'>Brittany Chiang</a><br />
            © 2023 John Nam</p>
        </Col>
      </Row>
    </Container >
  )
}

export default Footer
