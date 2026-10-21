import React from "react";
import { Col, Row } from "react-bootstrap";
import Cpp from "../../Assets/TechIcons/cpp.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Postgresql from "../../Assets/TechIcons/Postgresql.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Next from "../../Assets/TechIcons/Next.svg";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import { FaLinux, FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";

function Techstack() {
  const skillGroups = [
    {
      title: "Programming Languages",
      subtitle: "Core languages used for problem solving, software development, and academic projects",
      skills: [
        { name: "C", icon: <span style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#659ad2" }}>C</span> },
        { name: "C++", img: Cpp },
        { name: "Java", img: Java },
        { name: "Python", img: Python },
        { name: "JavaScript", img: Javascript },
      ],
    },
    {
      title: "Web Development",
      subtitle: "Full-stack web technologies for building responsive and functional applications",
      skills: [
        { name: "React.js", img: ReactIcon },
        { name: "Node.js", img: Node },
        { name: "Express.js", icon: <SiExpress fontSize="1.6rem" /> },
        { name: "Tailwind CSS", img: Tailwind },
        { name: "HTML5", icon: <FaHtml5 fontSize="1.6rem" color="#e34f26" /> },
        { name: "CSS3", icon: <FaCss3Alt fontSize="1.6rem" color="#1572b6" /> },
        { name: "PHP", icon: <FaPhp fontSize="1.6rem" color="#777bb4" /> },
        { name: "Next.js", img: Next },
      ],
    },
    {
      title: "Databases",
      subtitle: "Relational and NoSQL database management and data modeling",
      skills: [
        { name: "MySQL", icon: <SiMysql fontSize="1.8rem" color="#4479a1" /> },
        { name: "PostgreSQL", img: Postgresql || SQL },
        { name: "MongoDB", img: Mongo },
      ],
    },
    {
      title: "Tools & Technologies",
      subtitle: "Developer tools, version control, and development environments",
      skills: [
        { name: "Git", img: Git },
        { name: "VS Code", img: vsCode },
        { name: "IntelliJ IDEA", img: intelliJ },
        { name: "Postman", img: Postman },
        { name: "Chrome DevTools", img: chrome },
      ],
    },
    {
      title: "Cloud & Operating Systems",
      subtitle: "Infrastructure, containerization, and platforms (Foundational Knowledge)",
      skills: [
        { name: "AWS", img: AWS, badge: "Foundational" },
        { name: "Docker", img: Docker, badge: "Basic Knowledge" },
        { name: "Linux", icon: <FaLinux fontSize="1.6rem" color="#fcc624" />, badge: "Foundational" },
        { name: "macOS", img: macOs },
      ],
    },
  ];

  return (
    <div className="skills-container py-3">
      {skillGroups.map((group, gIdx) => (
        <div key={gIdx} className="skill-group-block mb-5">
          <div className="skill-group-header text-center mb-3">
            <h3 className="skill-group-title">
              <span className="purple">&#9642; </span>
              {group.title}
            </h3>
            <p className="skill-group-subtitle text-muted">{group.subtitle}</p>
          </div>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {group.skills.map((skill, sIdx) => (
              <Col xs={6} sm={4} md={3} lg={2} key={sIdx} className="tech-icons">
                {skill.img ? (
                  <img src={skill.img} alt={skill.name} className="tech-icon-images" />
                ) : (
                  skill.icon
                )}
                <div className="tech-icons-text">
                  <span>{skill.name}</span>
                  {skill.badge && (
                    <span className="badge bg-purple-badge ms-2">{skill.badge}</span>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
