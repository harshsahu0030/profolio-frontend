import React from "react";

const Banner = () => {
  return (
    <section
      id="banner"
      aria-label="banner-section"
      className="min-h-[80vh] w-full flex flex-col md:flex-row items-center justify-between gap-10 "
    >
      {/* left  */}
      <div className="flex items-center justify-center w-full-full flex-1">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Harsh Sahu</h1>
          <h2 className="text-3xl font-semibold">
            I am a <span className="text-accent">Web Developer</span>
          </h2>
          <p className="">
            I am a full-stack developer with over 1 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the frontend using React and
            other modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          <button className="uppercase text-base font-semibold w-fit px-6 py-3 bg-accent rounded-full">
            Download CV
          </button>
        </div>
      </div>

      {/* right  */}
      <div className="flex h-full flex-1 w-full bg-red-400">Hello</div>
    </section>
  );
};

export default Banner;
