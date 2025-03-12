import React from "react";
import "./style/Projects.css";

const projects = [
  {
    title: "StayLinked",
    technologies: "Flutter/Firebase/GetX",
    bgImage: "src/assets/images/stayLinked.webp",
    description:
      "An app that allow to track your family members, easily. Make sures that loved ones are always connected with no matter how far they are",
  },
  {
    title: "Car Sales Dashboard",
    technologies: "Python/Streamlit/SciPy",
    bgImage: "src/assets/images/stayLinked.webp",
    description:
      "A simple dashboard that allows you to see car sales metrics.Note: data for car sales is from 2024",
  },
  {
    title: "Project: Coming Soon",
    technologies: "Tech Stack",
    bgImage: "src/assets/images/stayLinked.webp",
    description:
      "Comming soon! Comming soon! Comming soon! Comming soon! Comming soon! Comming soon!",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 id="project-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{
              backgroundImage: `url(${project.bgImage})`,
              backgroundSize: "cover",
              }}></div>
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
