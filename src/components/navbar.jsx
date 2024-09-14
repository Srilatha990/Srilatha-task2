import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Navbar() {
  return (
    <div className='header-sec'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 header'>
            <div>
              <img src='../images/logo.avif'/>
            </div>
            <div>
              <a href='#hero'>HOME</a>
              <a href='#about'>ABOUT</a>
              <a href='#choose'>WHY CHOOSE US</a>
              <a href='#services'>SERVICES</a>
            </div>
            <div><button>CONTACT US</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
