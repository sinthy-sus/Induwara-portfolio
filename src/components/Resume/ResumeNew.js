import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Induwara_Anupriya.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaGraduationCap, FaCertificate, FaEnvelope, FaLinkedin } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <div className="text-center mb-4">
            <h1 className="project-heading">
              Curriculum <strong className="purple">Vitae</strong>
            </h1>
            <p className="text-muted">
              Official resume of Induwara Anupriya • Software Engineering Undergraduate
            </p>
          </div>

          <Row style={{ justifyContent: "center", position: "relative" }} className="mb-4">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              download="Induwara_Anupriya_Resume.pdf"
              style={{ maxWidth: "260px" }}
              className="d-flex align-items-center justify-content-center py-2"
            >
              <AiOutlineDownload className="me-2" style={{ fontSize: "1.2rem" }} />
              Download CV (PDF)
            </Button>
          </Row>

          <Row className="resume d-flex justify-content-center">
            <Document
              file={pdf}
              className="d-flex justify-content-center resume-doc"
              loading={
                <div className="text-light p-4">Loading Resume Document...</div>
              }
              error={
                <div className="text-light p-4 text-center">
                  <p>PDF viewer requires direct download or modern canvas support.</p>
                  <Button variant="primary" href={pdf} target="_blank">
                    Open PDF Directly
                  </Button>
                </div>
              }
            >
              <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
            </Document>
          </Row>

          {/* Quick Summary Card */}
          <Row className="justify-content-center mt-4">
            <Col md={10} lg={8}>
              <Card className="resume-summary-card">
                <Card.Body className="p-4">
                  <h4 className="purple mb-3">Profile Snapshot</h4>
                  <Row>
                    <Col sm={6} className="mb-3">
                      <h6><FaGraduationCap className="purple me-2" /> Education</h6>
                      <small className="text-light d-block">
                        • Bachelor of Software Technology (2024 - Present), University of Vocational Technology
                      </small>
                      <small className="text-light d-block">
                        • GCE A/L, Siridhamma College (Engineering Technology)
                      </small>
                    </Col>
                    <Col sm={6} className="mb-3">
                      <h6><FaCertificate className="purple me-2" /> Key Credentials</h6>
                      <small className="text-light d-block">
                        • AWS Academy Graduate (Cloud Foundations &amp; Architecting)
                      </small>
                      <small className="text-light d-block">
                        • Linux Foundation (LFS101) &amp; Docker (Simplilearn)
                      </small>
                    </Col>
                    <Col sm={6}>
                      <h6><FaEnvelope className="purple me-2" /> Email</h6>
                      <small className="text-light">induwarapathirane@gmail.com</small>
                    </Col>
                    <Col sm={6}>
                      <h6><FaLinkedin className="purple me-2" /> LinkedIn</h6>
                      <small className="text-light">in/induwara-anupriya-5b6223296</small>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }} className="mt-4">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              download="Induwara_Anupriya_Resume.pdf"
              style={{ maxWidth: "260px" }}
              className="d-flex align-items-center justify-content-center py-2"
            >
              <AiOutlineDownload className="me-2" style={{ fontSize: "1.2rem" }} />
              Download CV (PDF)
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
