import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/twitter.png";
import lift from "../assets/projects/lift.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Audio Emotion Recognition"
              description="A Deep Learning Algorithm combined with some vocal analysis to identify emotions."
              ghLink="https://colab.research.google.com/drive/1o66eIDcF4jWDrRXNbC7dl4_UnK1WdpVv?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Twitter Sentiment Analysis"
              description="A deep learning algorithm to empower financial decisions based on sentiment analysis"
              ghLink="https://colab.research.google.com/drive/1fOI8I1ovXcdCXexMK5tc5CdJ2WQF45NT?usp=sharing"
            />
          </Col>

        

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects