import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'

function Choose() {
  return (
    <div className='choose-sec' id='choose'>
        <Container>
            <Row className='choose-h'>
                <span>We Are Creative Agency</span>
                <h1>WHY CHOOSE US</h1>
            </Row>
            <Row className='mt-5'>
                <Col>
                <div className='choose-card'>
                    <span>1</span>
                    <div>
                    <h3>Experience and Expertise</h3>
                    <p>With over 10 years of industry experience, we have the knowledge and expertise</p>
                    </div>
                </div>
                <div className='choose-card'>
                    <span>2</span>
                    <div>
                    <h3>Client-Centered Approach</h3>
                    <p>We prioritize our clients, offering personalized services that ensure each project</p>
                    </div>
                </div>
                <div className='choose-card'>
                    <span>3</span>
                    <div>
                    <h3>Proven Track Record</h3>
                    <p>Our proven track record of successful projects and glowing customer reviews speaks</p>
                    </div>
                </div>
                <div className='choose-card'>
                    <span>3</span>
                    <div>
                    <h3>Proven Track Record</h3>
                    <p>Our proven track record of successful projects and glowing customer reviews speaks</p>
                    </div>
                </div>
                </Col>
                <Col>
                <div className='choose-card'>
                    <span>1</span>
                    <div>
                    <h3>Experience and Expertise</h3>
                    <p>With over 10 years of industry experience, we have the knowledge and expertise</p>
                    </div>
                </div>
                <div className='choose-card'>
                    <span>2</span>
                    <div>
                    <h3>Client-Centered Approach</h3>
                    <p>We prioritize our clients, offering personalized services that ensure each project</p>
                    </div>
                </div>
                <div className='choose-card'>
                    <span>3</span>
                    <div>
                    <h3>Proven Track Record</h3>
                    <p>Our proven track record of successful projects and glowing customer reviews speaks</p>
                    </div>
                </div>
                <div className='choose-card'>
                    <span>3</span>
                    <div>
                    <h3>Proven Track Record</h3>
                    <p>Our proven track record of successful projects and glowing customer reviews speaks</p>
                    </div>
                </div>
                </Col>
                
            </Row>
        </Container>

    </div>
  )
}

export default Choose