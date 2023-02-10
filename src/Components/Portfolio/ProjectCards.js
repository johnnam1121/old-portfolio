import React from 'react'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function ProjectCards(props) {
  return (
    <MDBCol style={{ width: '20vw' }} className='shadow-lg'>
      <MDBCard style={{ backgroundColor: '#393e46' }}>
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>{props.header}</MDBCardText>
          {/* <MDBCardText>{props.information}</MDBCardText>
          <MDBCardText>{props.link}</MDBCardText> */}
        </MDBCardBody>
        <MDBCardImage
          className='projectImg '
          src={props.image}
          alt={props.alt}
          position='top'
          style={{ width: '15vw', height: '20vh', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom:'2vh' }}
        />
      </MDBCard>
    </MDBCol>
  )
}

export default ProjectCards