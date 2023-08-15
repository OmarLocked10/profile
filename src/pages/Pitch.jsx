import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import YouTubeEmbed from "../components/Youtube"

const PitchEl = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    
    setWidth(window.innerWidth);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "50px" }}>
      <div style={{ marginBottom: "20px" }}>
        {/* Add any content you want above the video */}
      </div>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <YouTubeEmbed videoId="72m0cK423-Q" />
      </Row>
    </div>
  )
}

export default PitchEl;