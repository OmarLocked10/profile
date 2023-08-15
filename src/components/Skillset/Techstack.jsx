import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiGit,
} from "react-icons/di";
import {
  DiPython,
  DiJavascript1,
  DiVim,
  DiLinux,
  DiGit,
  DiSqllite,
  DiMarkdown
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVim />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMarkdown />
      </Col>
    </Row>
  );
}

export default Techstack;
