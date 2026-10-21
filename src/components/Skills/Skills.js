import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "../About/Techstack";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          Technical <strong className="purple">Skills &amp; Competencies</strong>
        </h1>
        <p className="text-center text-muted mb-5">
          Organized across programming languages, web engineering, databases, developer tools, and cloud infrastructure
        </p>
        <Techstack />
      </Container>
    </Container>
  );
}

export default Skills;
