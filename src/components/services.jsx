import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'

function Services() {
  return (
    <div className='service-sec' id='services'>
        <Container>
            <Row className='service-content'>
                <h1>Services We offer</h1>
                <span>We Are Creative Agency</span>
                <span></span>
            </Row>
            <Row className='mt-5'>
                <Col>
                <div className='service-card'>
                    <img src='../images/ecommerce.png'/>
                    <h3>E-Commerce</h3>
                </div></Col>
                <Col>
                <div className='service-card'>
                    <img src='../images/android.png'/>
                    <h3>APK (Android)</h3>
                </div></Col>
                <Col>
                <div className='service-card'>
                    <img src='../images/medical.png'/>
                    <h3> Medical Coding</h3>
                </div></Col>
                <Col>
                <div className='service-card'>
                    <img src='../images/web-development.jpg'/>
                    <h3>  Web Developer</h3>
                </div></Col>
            </Row>
            
        </Container>
      
    </div>
  )
}

export default Services
