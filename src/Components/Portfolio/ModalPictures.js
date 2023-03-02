import React, { useState } from 'react';
import { Image, Modal } from 'react-bootstrap';

const ModalPictures = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image
        className='projectImg'
        src={props.img}
        alt={props.alt}
        onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="background" closeButton>
          <Modal.Title className="smallerProjectHeadings">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="background" >
          <Image src={props.img} alt={props.alt} fluid />
        </Modal.Body>
        <Modal.Footer className="background" >
          <p className="projectParagraphs">{props.body}</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPictures;
