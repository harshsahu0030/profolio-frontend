import React from "react";
import { testimonialdata } from "../data/testimonial";
import Slider from "./helper-components/Slider";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      aria-label="testimonial-section"
      className="w-full"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold capitalize">Testimonials</h2>

        <span className="h-1 w-12 bg-accent rounded-full"></span>

        <span className="text-base font-medium text-text/80">
          What my client are saying?
        </span>
      </div>

      <div className="h-full w-full md:w[80%] lg:w-[60%] m-auto bg-c-dark border-2 border-accent mt-5 rounded-4xl overflow-hidden">
        <Slider data={testimonialdata} />
      </div>
    </section>
  );
};

export default Testimonial;
