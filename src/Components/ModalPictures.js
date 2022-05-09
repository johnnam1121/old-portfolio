import React, { Component, useState } from 'react'
import { Modal, Image } from 'react-bootstrap';

const ModalPictures = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image
        style={{ width: '10vw', height: '25vh', marginRight:5 }}
        className='extraImg'
        src={props.Image}
        alt={props.AltTag}
        onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="component" closeButton>
          <Modal.Title className="commentary">{props.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="component" >
          <Image src={props.Image} alt={props.AltTag} fluid />
        </Modal.Body>
        <Modal.Footer className="component" >
          <p className="commentary">{props.Body}</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPictures;
