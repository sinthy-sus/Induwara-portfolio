import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineFundProjectionScreen, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} md={12} className="home-header">
              <div className="hero-text-block">
                <div className="hero-status-pill mb-3">
                  <BsCheckCircleFill className="status-pill-icon me-2" />
                  <span>Seeking Software Engineering Internship Opportunities</span>
                </div>

                <h2 className="heading-sub">
                  Hi, I'm{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h2>

                <h1 className="heading-name">
                  <strong className="main-name">INDUWARA ANUPRIYA</strong>
                </h1>

                <h3 className="heading-title">
                  Software Engineering Student &amp; Aspiring Software Developer
                </h3>

                <div className="hero-typewriter-box">
                  <Type />
                </div>

                <p className="hero-bio">
                  I am a dedicated Software Engineering undergraduate at the
                  University of Vocational Technology, passionate about building
                  reliable full-stack applications, robust databases, and clean,
                  scalable code. With solid programming foundations in Java,
                  C++, Python, and JavaScript, paired with modern web engineering
                  (React, Node.js) and verified credentials in AWS, Docker, and
                  Linux, I am eager to apply my skills to real-world engineering
                  challenges.
                </p>

                <div className="hero-cta-buttons">
                  <Button
                    as={Link}
                    to="/project"
                    className="btn-primary me-3 mb-2 px-4 py-2 hero-btn"
                  >
                    <AiOutlineFundProjectionScreen className="me-2" />
                    View My Projects
                  </Button>
                  <Button
                    as={Link}
                    to="/contact"
                    variant="outline-light"
                    className="mb-2 px-4 py-2 hero-btn-outline"
                  >
                    <AiOutlineMail className="me-2" />
                    Contact Me
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={5} md={12} className="myAvtar text-center" style={{ paddingBottom: 20 }}>
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.03}>
                <div className="avatar-wrapper">
                  <img
                    src={myImg}
                    alt="Induwara Anupriya"
                    className="img-fluid hero-avatar"
                  />
                </div>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "20px", paddingBottom: "70px" }}>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">reach out </span>for internship opportunities or collaborations
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sinthy-sus"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/induwara-anupriya-5b6223296"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:induwarapathirane@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Email Induwara Anupriya"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
