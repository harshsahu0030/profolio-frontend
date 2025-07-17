import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ data, direction }) => {
  return (
    <div
      className={`h-full w-full bg-surface rounded-2xl flex flex-col overflow-hidden ${
        direction === "reverse" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* left  */}
      <div className="relative flex flex-1 h-full w-full group/item p-5  justify-center items-center">
        <img
          src={data?.image}
          alt="project-image"
          className="group-hover/item:scale-105 transition-all h-full object-contain"
          height={400}
          width={400}
        />

        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-surface/40 invisible group-hover/item:visible transition-all">
          <a
            className="px-4 py-2 bg-accent rounded-lg text-sm font-semibold flex items-center gap-2 hover:scale-95 transition-all"
            target="_blank"
            href={data?.link[0]}
          >
            Visit <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      {/* right  */}
      <div className="flex flex-1 flex-col justify-center p-5 gap-3">
        <h4 className="text-lg md:text-2xl font-semibold">
          {data?.title}
          <span className="text-xs font-normal pl-2">({data?.for})</span>
        </h4>
        <h5 className="text-sm md:text-base font-medium">({data?.subTitle})</h5>
        <p className="text-xs md:text-sm">{data?.description}</p>

        <div className="flex flex-col gap-2">
          {data?.link?.map((item) => (
            <a
              href={item}
              target="_blank"
              className="text-xs md:text-sm italic text-accent underline"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {data?.technologies?.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs md:text-sm border border-accent rounded-full"
            >
              #{item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
