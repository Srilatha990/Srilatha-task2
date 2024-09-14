import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'

function About() {
  return (
    <div className='about-sec' id='about'>
      <Container>
        <Row className='about'>
            <Col className='about-img'>
            <img src='../images/img1.jpg'/>
            </Col>
            <Col className='about-content'>
            <span>We Are Creative Agency</span>
            <h1>About Agency</h1>
            <p>We are dedicated to revolutionizing the software industry with innovative and reliable solutions. Our team of experienced developers and industry experts is committed to delivering cutting-edge software that meets the evolving needs of businesses. From custom software development to seamless integrations and robust support.</p>
            <button>Learn More <span className='bi bi-chevron-right'></span></button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
