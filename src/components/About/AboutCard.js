import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple">Induwara Anupriya</span>, a{" "}
            <span className="purple">Software Engineering undergraduate</span> based in{" "}
            <span className="purple">Galle, Sri Lanka</span>.
            <br />
            <br />
            Currently pursuing my Bachelor of Software Technology at the{" "}
            <span className="purple">University of Vocational Technology</span>, my academic
            and project experience centers around software engineering principles,
            object-oriented architecture, database systems, and modern web application development.
            <br />
            <br />
            I have a strong drive for building practical, well-engineered digital products
            and am actively seeking a <span className="purple">Software Engineering Internship</span> where
            I can contribute to real-world codebases, collaborate closely with senior engineers, and gain
            invaluable industry experience.
            <br />
            <br />
            My core technical focus areas include:
          </p>

          <ul style={{ paddingLeft: "15px" }}>
            <li className="about-activity">
              <ImPointRight className="purple me-2" /> Full-Stack Web Development (React.js, Node.js, Express.js, Tailwind CSS)
            </li>
            <li className="about-activity">
              <ImPointRight className="purple me-2" /> Database Management &amp; Modeling (MySQL, PostgreSQL, MongoDB)
            </li>
            <li className="about-activity">
              <ImPointRight className="purple me-2" /> Cloud &amp; Containerization Fundamentals (AWS Training Badges, Docker, Linux LFS101)
            </li>
            <li className="about-activity">
              <ImPointRight className="purple me-2" /> Core Algorithms &amp; OOP Foundations (Java, C++, Python, JavaScript)
            </li>
          </ul>

          <p style={{ color: "#d8b4fe", marginTop: "24px", fontStyle: "italic" }}>
            "Committed to continuous learning, building dependable software, and delivering meaningful engineering value."
          </p>
          <footer className="blockquote-footer">Induwara Anupriya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
