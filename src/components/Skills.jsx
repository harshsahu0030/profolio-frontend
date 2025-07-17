import React from "react";
import { skillsData } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" aria-label="skills-section" className="w-full">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold capitalize">Skills</h2>

        <span className="h-1 w-12 bg-accent rounded-full"></span>

        <span className="text-base font-medium text-text/80">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </span>
      </div>

      <div className="h-full w-full p-5 grid md:grid-cols-2 gap-5">
        {skillsData?.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 bg-surface rounded-4xl p-5 transition-all hover:scale-105 border-2 border-transparent hover:border-accent"
          >
            <h5 className="text-xl font-semibold">{item?.title}:</h5>

            <div className="flex items-center gap-2 flex-wrap">
              {item?.skills?.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs md:text-sm border border-accent rounded-full"
                >
                  #{item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
