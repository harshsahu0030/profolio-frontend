import React from "react";

const Exp = ({ data }) => {
  return (
    <div className="h-full w-full bg-surface p-5 flex flex-col gap-4 rounded-2xl">
      {/* top  */}
      <div>
        <h4 className="text-2xl font-semibold">{data?.role}</h4>
        <h5 className="text-sm font-medium">{data?.company}</h5>
        <span className="text-xs text-text/70">{data?.duration}</span>
      </div>

      <p className="text-sm">{data?.learn}</p>

      <p className="text-base font-semibold">SKILLS:</p>

      <div className="flex items-center gap-2 flex-wrap">
        {data?.skills?.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs md:text-sm border border-accent rounded-full"
          >
            #{item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Exp;
