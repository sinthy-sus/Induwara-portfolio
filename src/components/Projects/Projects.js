import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import libraryHub from "../../Assets/Projects/libraryHub.png";
import userCrud from "../../Assets/Projects/userCrud.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          My Software <strong className="purple">Projects </strong>
        </h1>
        <p className="text-center text-muted mb-5">
          Practical applications built to demonstrate software engineering principles, full-stack architecture, and clean user experience
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={6} lg={5} className="project-card">
            <ProjectCard
              imgPath={libraryHub}
              category="Full-Stack Web Application"
              title="LibraryHub – Digital Library Management System"
              description="A modern web-based library management platform designed to streamline library operations and enhance the digital learning experience. Features include online book catalog search & discovery, personal book checkout tracking and return reminders, interactive seat booking for study areas, student book reviews & donation submissions, and collaborative study group spaces."
              techStack={["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]}
              ghLink="https://github.com/sinthy-sus/Library-Management-System"
            />
          </Col>

          <Col md={6} lg={5} className="project-card">
            <ProjectCard
              imgPath={userCrud}
              category="Web Application &amp; API"
              title="User Management System (CRUD Application)"
              description="A full-stack user administration application providing robust Create, Read, Update, and Delete (CRUD) operations. Features include user onboarding with dynamic form validation, a structured tabular directory of registered users with ID, Name, and Email attributes, real-time in-place user profile updates, and safe record deletion."
              techStack={["React.js", "JavaScript", "REST API", "Bootstrap", "CSS3"]}
              ghLink="https://github.com/sinthy-sus/CRUD-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
