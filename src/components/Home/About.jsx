import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 It's <span className="yellow"> Omar Ibrahim! a passionate Engineer with a strong inclination
                  towards Data Science. I've been on a journey of self-learning, honing my data science
                  skills to tackle various engineering challenges from a unique perspective. </span>
                  My curiosity and determination have led me to master Python programming, data
analysis, and computational fluid dynamics, all of which fuel my interest in harnessing
the power of AI to address issues that traditional techniques struggle to solve. I call
this the Omarism Mix, a mix of engineering with AI.
 <span className="yellow"> My ultimate goal is to pioneer innovations that have a lasting impact on industries and
society as a whole by combining AI and engineering expertise. I aspire to become a
dedicated data scientist collaborating on projects that push the boundaries of what's
possible in the data science field </span>
                <br />
                <br />
                  As a
                  <b className="yellow"> Data </b> Scientist,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br/>

                  <br />I  have knowledge in programming languages such as
                  <b className="yellow"> C, C++,  HTML , CSS, Pyhon, SQL , R , Cloud Computing</b>
                  <br/>
                
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/OmarLOCKED119"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://github.com/OmarLocked10"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="GitHub"
                    >
                      <FaGithub/>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/omarismic_/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About