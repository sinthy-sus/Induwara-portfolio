import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.message.trim()) newErrors.message = "Please write a message.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Compose mailto URL for genuine submission via email client
    const mailtoUrl = `mailto:induwarapathirane@gmail.com?subject=${encodeURIComponent(
      formData.subject + " - from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setStatus({
      type: "info",
      message:
        "Opening your default email client to send your message directly to Induwara Anupriya (induwarapathirane@gmail.com). Note: For direct background delivery without opening your email client, an external form endpoint (like Formspree or EmailJS) can be configured.",
    });
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          Get in <strong className="purple">Touch</strong>
        </h1>
        <p className="text-center text-muted mb-5">
          Feel free to reach out for internship opportunities, project collaborations, or inquiries
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* Contact Details Cards */}
          <Col lg={4} md={12} className="mb-4">
            <Card className="contact-info-card mb-3">
              <Card.Body className="d-flex align-items-center">
                <div className="contact-icon-box me-3">
                  <FaEnvelope />
                </div>
                <div>
                  <h6 className="text-muted mb-1">Email</h6>
                  <a
                    href="mailto:induwarapathirane@gmail.com"
                    className="contact-link"
                  >
                    induwarapathirane@gmail.com
                  </a>
                </div>
              </Card.Body>
            </Card>

            <Card className="contact-info-card mb-3">
              <Card.Body className="d-flex align-items-center">
                <div className="contact-icon-box me-3">
                  <FaLinkedinIn />
                </div>
                <div>
                  <h6 className="text-muted mb-1">LinkedIn</h6>
                  <a
                    href="https://www.linkedin.com/in/induwara-anupriya-5b6223296"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    in/induwara-anupriya-5b6223296
                  </a>
                </div>
              </Card.Body>
            </Card>

            <Card className="contact-info-card mb-3">
              <Card.Body className="d-flex align-items-center">
                <div className="contact-icon-box me-3">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h6 className="text-muted mb-1">Phone</h6>
                  <a href="tel:+94765553104" className="contact-link">
                    +94 76 555 3104
                  </a>
                </div>
              </Card.Body>
            </Card>

            <Card className="contact-info-card">
              <Card.Body className="d-flex align-items-center">
                <div className="contact-icon-box me-3">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h6 className="text-muted mb-1">Location</h6>
                  <span className="text-light">Galle, Sri Lanka</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={8} md={12}>
            <Card className="contact-form-card">
              <Card.Body className="p-4">
                <h3 className="mb-4 purple">Send a Message</h3>

                {status && (
                  <Alert variant={status.type} onClose={() => setStatus(null)} dismissible>
                    {status.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} noValidate>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                          className="contact-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group controlId="email">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          className="contact-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="subject" className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Internship Inquiry / Software Project"
                      value={formData.subject}
                      onChange={handleChange}
                      isInvalid={!!errors.subject}
                      className="contact-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.subject}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="message" className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      className="contact-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button type="submit" className="btn-primary px-4 py-2">
                    <FaPaperPlane className="me-2" /> Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
