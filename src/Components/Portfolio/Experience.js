import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ModalPictures from './ModalPictures';
class Experience extends Component {
  render() {
    return (
      <Container fluid>

        <Row className='mb-2'>
          <Col md={{ span: 6, offset: 3 }}>
            <p className='paragraphs' style={{ color: '#00adb5' }}>Experience</p>
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col md={{ span: 3, offset: 3 }}>
            <p className='paragraphs'>
              Sharpstown International School
            </p>
            <p className='paragraphs'>
              Lots of text and lists Here
            </p>
          </Col>
          <Col md={{ span: 3 }}>
            <ModalPictures
              Title={"Girls Who Code Post"}
              Image={process.env.PUBLIC_URL + "/Pictures/GWCBTOY.jpg"}
              AltTag={"GWC Post"}
              Body={"I was awarded 2021-2022 beginning teacher of the year and my club created a post for me on Instagram!"}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col md={{ span: 3, offset: 3 }}>
            <ModalPictures
              Title={"Girls Who Code Post"}
              Image={process.env.PUBLIC_URL + "/Pictures/GWCBTOY.jpg"}
              AltTag={"GWC Post"}
              Body={"I was awarded 2021-2022 beginning teacher of the year and my club created a post for me on Instagram!"}
            />
          </Col>
          <Col md={{ span: 3 }}>
            <p className='paragraphs'>
              Sharpstown International School
            </p>
            <p className='paragraphs'>
              Lots of text and lists Here
            </p>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col md={{ span: 3, offset: 3 }}>
            <p className='paragraphs'>
              Sharpstown International School
            </p>
            <p className='paragraphs'>
              Lots of text and lists Here
            </p>
          </Col>
          <Col md={{ span: 3 }}>
            <ModalPictures
              Title={"Girls Who Code Post"}
              Image={process.env.PUBLIC_URL + "/Pictures/GWCBTOY.jpg"}
              AltTag={"GWC Post"}
              Body={"I was awarded 2021-2022 beginning teacher of the year and my club created a post for me on Instagram!"}
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 3 }}>
            <p className='paragraphs'>
              Learn more about me: <a className='paragraphs' href='google.com'>here!</a>
            </p>
          </Col>
        </Row>
      </Container >
    )
  }
}

export default Experience