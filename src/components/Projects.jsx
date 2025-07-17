import React from "react";
import Project from "./helper-components/Project";
import { projectsData } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" aria-label="projects-section" className="w-full">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold capitalize">Latest Works</h2>

        <span className="h-1 w-12 bg-accent rounded-full"></span>

        <span className="text-base font-medium text-text/80">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </span>
      </div>

      <div className="h-full w-full bg-c-dark p-5 flex flex-col gap-10 group/project">
        {projectsData?.map((item, index) => {
          let direction = index % 2 === 0 ? "straight" : "reverse";
          return <Project key={item.link} data={item} direction={direction} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
