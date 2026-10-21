import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsCodeSlash } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-img-container">
        <Card.Img variant="top" src={props.imgPath} alt={props.title} className="project-thumbnail" />
        {props.category && (
          <span className="project-category-badge">{props.category}</span>
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="project-title mb-2">{props.title}</Card.Title>

        {props.techStack && props.techStack.length > 0 && (
          <div className="project-tech-badges mb-3">
            {props.techStack.map((tech, i) => (
              <span key={i} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}

        <Card.Text className="project-description mb-4" style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>

        <div className="project-actions mt-auto d-flex flex-wrap gap-2">
          {props.ghLink ? (
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer" className="me-2">
              <BsGithub /> &nbsp;GitHub
            </Button>
          ) : (
            <span className="project-repo-note text-muted small d-inline-flex align-items-center me-2">
              <BsCodeSlash className="me-1" /> Academic Project
            </span>
          )}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
