import React from "react";
import Project from "../components/Project";
import projects from "../data/projects.json";

const ProjectsContainer = () => {
  const projectsList = projects.map((project, index) => (
    <Project {...project} key={"project-item-" + index} />
  ));

  return (
    <ul className="list-disc pl-5">
      {projectsList}
    </ul>
  );
};

export default ProjectsContainer;