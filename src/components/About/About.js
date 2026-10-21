import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Education from "./Education";
import myImg from "../../Assets/avatar.png";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px", alignItems: "center" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "30px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="purple">Induwara Anupriya</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingBottom: "30px" }}
              className="about-img text-center"
            >
              <div className="about-avatar-wrapper">
                <img
                  src={myImg}
                  alt="Induwara Anupriya"
                  className="img-fluid rounded-circle about-profile-img"
                />
              </div>
            </Col>
          </Row>

          <h1 className="project-heading mt-4 text-center">
            Academic <strong className="purple">Education </strong>
          </h1>
          <p className="text-center text-muted mb-4">
            My formal educational background and qualifications
          </p>
          <Education />

          <h1 className="project-heading mt-5 text-center">
            Technical <strong className="purple">Skillset </strong>
          </h1>
          <p className="text-center text-muted mb-4">
            Structured overview of programming languages, web technologies, databases, and tools
          </p>
          <Techstack />
        </Container>
      </Container>
    </>
  );
}

export default About;
