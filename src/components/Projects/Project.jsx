import React from "react";
import "./style/Projects.css";

const projects = [
  {
    title: "Project #1",
    technologies: "Python/Flutter/Javascript",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    title: "Project #1",
    technologies: "Python/Flutter/Javascript",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    title: "Project #1",
    technologies: "Python/Flutter/Javascript",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 id="project-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image"></div>
            <h3>{project.title}</h3>
            <p className="technologies">{project.technologies}</p>
            <p className="description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
