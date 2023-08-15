import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1></h1>
                <p>
                 <span className="yellow"></span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    
                  </li>
                  <li className="contact-icons">
                    
                  </li>
                  <li className="contact-icons">
                    
                  </li>
                  <li className="contact-icons">
                  
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social