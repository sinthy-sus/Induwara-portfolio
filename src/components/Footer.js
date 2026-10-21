import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4" className="footer-copywright">
          <h3>Induwara Anupriya | Portfolio</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Induwara Anupriya</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons mb-0">
            <li className="social-icons">
              <a
                href="https://github.com/sinthy-sus"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/induwara-anupriya-5b6223296"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:induwarapathirane@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Induwara Anupriya"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
