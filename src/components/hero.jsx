
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'



function Hero() {
  return (
    <div className='hero-section' id='hero'>
      <Container>
        <Row>
          <Col className='hero-content'> 
          <h1>Creative Web Development Company</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, risus sit amet auctor sodales, justo erat tempor eros.</p>
          <button>EXPLORE MORE</button>
          </Col>
          <Col className='hero-image'>
          <img src='../images/A1.jpg'/>
          </Col>
        </Row>
      </Container>
        
      
    </div>
  )
}

export default Hero
