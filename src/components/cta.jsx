import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'

function Cta() {
  return (
    <div className='cta-sec'>
      <Container>
        <Row>
          <Col className='cta-content mt-5'>
          <span>Ready to Elevate Your Business?</span>
           <h1>Contact Us</h1>
           <p>Boost your business today with our tailored solutions. Contact us for a free consultation and unlock your full potential.</p>
           <button><span className='bi bi-telephone-fill'></span> 9876543219</button>
           </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cta
