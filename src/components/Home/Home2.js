import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about-preview">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">Software Engineering undergraduate</b>{" "}
              at the <i>University of Vocational Technology</i>, driven by curiosity,
              a strong interest in problem-solving, and a dedication to building
              reliable, user-friendly software applications.
              <br />
              <br />
              My programming foundation spans:
              <i>
                <b className="purple">
                  {" "}
                  C, C++, Java, Python, and JavaScript
                </b>
              </i>
              , allowing me to approach computational challenges with flexibility and precision.
              <br />
              <br />
              I enjoy full-stack web development and have practical experience building
              modern applications with
              <i>
                <b className="purple"> React.js, Node.js, Express.js, and Tailwind CSS</b>
              </i>
              , coupled with relational and document databases such as
              <b className="purple"> MySQL, PostgreSQL, and MongoDB</b>.
              <br />
              <br />
              To complement my development skillset, I actively study cloud and infrastructure technologies,
              holding verified foundational credentials in
              <i>
                <b className="purple"> AWS Cloud, Linux environments, and Docker containerization</b>
              </i>
              .
              <br />
              <br />
              I am actively seeking a <b className="purple">Software Engineering Internship</b> where
              I can apply my academic and technical knowledge, collaborate within a professional engineering team,
              and contribute to real-world software solutions.
            </p>
            <div className="mt-4">
              <Link to="/about" className="learn-more-link">
                Read More About My Background &amp; Education &rarr;
              </Link>
            </div>
          </Col>
          <Col md={4} className="myAvtar text-center">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.03}>
              <div className="home2-avatar-card">
                <img src={myImg} className="img-fluid home2-avatar-img" alt="Induwara Anupriya" />
                <div className="home2-avatar-caption">
                  <h5>Induwara Anupriya</h5>
                  <p>Software Engineering Student</p>
                  <span className="badge bg-purple-subtle text-white">Internship Seeker</span>
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
