import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowCircleUp } from 'react-icons/fa';

const TopButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true)
    }
    else if (scrolled <= 150) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
        in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Container fluid>
      <Row>
        <Col>
          <button className='topButton'>
            <FaArrowCircleUp onClick={scrollToTop}
              style={{
                display: visible ? 'inline' : 'none',
                scale: '1.5',
                marginBottom: '4'
              }} />
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default TopButton;
