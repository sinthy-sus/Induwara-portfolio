import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaGraduationCap, FaUniversity, FaAward } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";

function Education() {
  const educationList = [
    {
      degree: "Bachelor of Software Technology",
      institution: "University of Vocational Technology",
      period: "2024 - Present",
      major: "Major in Software Technology",
      description:
        "Comprehensive undergraduate coursework covering software engineering principles, algorithms, data structures, database management systems, web development, object-oriented programming, and computer systems.",
      icon: <FaGraduationCap />,
      current: true,
    },
    {
      degree: "GCE Advanced Level",
      institution: "Siridhamma College",
      period: "2020 - 2022",
      major: "Engineering Technology Stream",
      description:
        "Completed Advanced Level secondary education focused on Engineering Technology, Science for Technology, and Information & Communication Technology.",
      icon: <FaUniversity />,
      current: false,
    },
    {
      degree: "Diploma in English",
      institution: "Jesuit Institute of Higher Studies",
      period: "Completed",
      major: "English Language & Professional Communication",
      description:
        "Developed professional communication, academic writing, and presentation skills essential for collaborative engineering environments.",
      icon: <FaAward />,
      current: false,
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      {educationList.map((item, index) => (
        <Col md={10} key={index} className="mb-4">
          <Card className="education-card">
            <Card.Body>
              <div className="d-flex align-items-start justify-content-between flex-wrap">
                <div className="d-flex align-items-center mb-2">
                  <div className="education-icon-box me-3">{item.icon}</div>
                  <div>
                    <h4 className="education-degree mb-1">{item.degree}</h4>
                    <h5 className="education-institution mb-1 purple">
                      {item.institution}
                    </h5>
                    <div className="education-major text-muted">
                      {item.major}
                    </div>
                  </div>
                </div>
                <div className="education-period-badge">
                  <BsCalendarEvent className="me-1" />
                  <span>{item.period}</span>
                  {item.current && (
                    <span className="badge bg-success ms-2">Current</span>
                  )}
                </div>
              </div>
              <p className="education-desc mt-3 mb-0">{item.description}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Education;
