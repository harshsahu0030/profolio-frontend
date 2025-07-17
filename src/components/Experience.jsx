import React from "react";
import { experienceData } from "../data/experience";
import Exp from "./helper-components/Exp";

const Experience = () => {
  return (
    <section id="experience" aria-label="experience-section" className="w-full">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold capitalize">Experience</h2>

        <span className="h-1 w-12 bg-accent rounded-full"></span>

        <span className="text-base font-medium text-text/80">
          A collection of my work experience and the roles I have taken in
          various organizations
        </span>
      </div>

      <div className="h-full w-full bg-c-dark p-5 grid md:grid-cols-2 gap-5 ">
        {experienceData?.map((item) => (
          <Exp key={item.company} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
