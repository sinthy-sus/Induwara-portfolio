import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { FaAward, FaCalendarAlt, FaCheckCircle, FaLinux } from "react-icons/fa";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Python from "../../Assets/TechIcons/Python.svg";

function Certificates() {
  const certificateList = [
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "AWS Academy",
      credentialType: "Training Badge",
      date: "Jul 2026",
      category: "Cloud Computing",
      description:
        "Comprehensive foundational knowledge of AWS Cloud concepts, security, architecture, pricing, and support services.",
      iconImg: AWS,
      verified: true,
    },
    {
      title: "AWS Academy Graduate – Cloud Architecting",
      issuer: "AWS Academy",
      credentialType: "Training Badge",
      date: "Oct 2026",
      category: "Cloud Architecture",
      description:
        "Fundamentals of building IT infrastructure on AWS platform, focusing on scalability, high availability, and best architectural practices.",
      iconImg: AWS,
      verified: true,
    },
    {
      title: "Introduction to Linux (LFS101)",
      issuer: "The Linux Foundation",
      credentialType: "Course Completion",
      date: "Jun 2026",
      category: "Operating Systems",
      description:
        "Core competencies in Linux administration, file systems, permissions, shell navigation, and basic command-line tooling.",
      customIcon: <FaLinux fontSize="2.8rem" color="#fcc624" />,
      verified: true,
    },
    {
      title: "Getting Started with Docker",
      issuer: "Simplilearn",
      credentialType: "Course Completion",
      date: "Jul 2026",
      category: "DevOps & Containerization",
      description:
        "Fundamental concepts of containerization, Docker architecture, Dockerfile syntax, container lifecycle, and image deployment.",
      iconImg: Docker,
      verified: true,
    },
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      credentialType: "Course Completion",
      date: "Feb 2025",
      category: "Programming",
      description:
        "Foundational programming logic, control structures, data collections, and problem-solving techniques in Python.",
      iconImg: Python,
      verified: true,
    },
  ];

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          Verified <strong className="purple">Certifications &amp; Credentials</strong>
        </h1>
        <p className="text-center text-muted mb-5">
          Official certifications and training credentials completed by Induwara Anupriya
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {certificateList.map((cert, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="certificate-card h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="cert-icon-container">
                      {cert.iconImg ? (
                        <img
                          src={cert.iconImg}
                          alt={cert.title}
                          className="cert-icon-img"
                        />
                      ) : (
                        cert.customIcon || <FaAward fontSize="2.5rem" className="purple" />
                      )}
                    </div>
                    <span className="badge bg-purple-badge">
                      {cert.category}
                    </span>
                  </div>

                  <h4 className="certificate-title mb-2">{cert.title}</h4>

                  <div className="certificate-meta mb-3">
                    <div className="cert-issuer">
                      <FaAward className="me-2 purple" />
                      <strong>{cert.issuer}</strong>
                    </div>
                    <div className="cert-date text-muted">
                      <FaCalendarAlt className="me-2" />
                      <span>{cert.date}</span>
                      <span className="mx-2">•</span>
                      <span>{cert.credentialType}</span>
                    </div>
                  </div>

                  <p className="certificate-description mb-4 flex-grow-1">
                    {cert.description}
                  </p>

                  <div className="cert-footer d-flex align-items-center justify-content-between pt-3 border-top border-secondary">
                    <span className="verified-badge d-flex align-items-center">
                      <FaCheckCircle className="text-success me-1" />
                      <small className="text-light">Verified on CV</small>
                    </span>
                    <span className="text-muted small">Academic Credential</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
