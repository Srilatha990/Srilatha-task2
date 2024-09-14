import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'

function Footer() {
  return (
    <div className='footer-sec'>
        <Container>
            <Row>
                <Col className='footer-image'>
                <img src='../images/logo.avif'/>
                </Col>
                <Col className='info'>
                <h4>Company</h4>
                <a href='#hero'>Home</a>
                <a href='#about'>About</a>
                <a href='#'>Careers</a>
                <a href='#choose'>Why Choose US</a>
                <a href='#services'>Services</a>
                
                </Col>
                <Col className='contact'>
                <h4>Contact</h4>
                <a href='#'> <span className='bi bi-facebook'></span>Facebook</a>
                <a href='#'> <span className='bi bi-linkedin'></span>Linkedin</a>
                <a href='#'> <span className='bi bi-twitter-x'></span>Twitter</a>
                <a href='#'> <span className='bi bi-instagram'></span>Instagram</a>
                <a href='#'> <span className='bi bi-youtube'></span>Youtube</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer