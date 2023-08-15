import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/sLogo.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-icons">
            
          </Col>
          
          <Col md="4" className="footer-body">
          <span>Torture the data, and it will confess!</span>
            <ul className="footer-icons">
              <li className="social-icons">
              
              </li>
              <li className="social-icons">
             
              </li>
              <li className="social-icons">
                
              </li>
              <li className="social-icons">
                
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer