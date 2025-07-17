import React, { useEffect } from "react";
import useApiCall from "../hooks/useApiCall";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { MdOutlineMessage } from "react-icons/md";

const Contact = () => {
  const { callApi, loading, error, data } = useApiCall();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // callApi("/contact", "POST", data);
    console.log(data);
  };

  useEffect(() => {
    if (data) {
      toast.success("Form sumbitted successfully");
    }
    if (error) {
      toast.error("Form not Subitted");
    }
  }, [error, data]);

  return (
    <section
      id="contact"
      aria-label="contact-section"
      className="h-full w-full grid md:grid-cols-2 gap-5 py-5"
    >
      {/* left  */}
      <div className="h-full w-full p-4"></div>

      {/* right  */}
      <form
        className="h-full flex flex-col p-4 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="flex items-center gap-2 text-4xl font-semibold">
          Let's Connect <MdOutlineMessage />
        </h2>

        <hr className="border border-text/50" />

        {/* name  */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm md:text-base font-medium">
            Your Name:*
          </label>
          <input
            type="text"
            id="name"
            className="bg-c-bolddark border border-c-semidark rounded-lg focus:ring-c-blue focus:border-c-blue block w-full  outline-none p-4"
            placeholder="Enter your name here"
            {...register("name", { required: "Name is required" })}
          />
          {errors.email && (
            <span className="text-sm font-medium text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* email  */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm md:text-base font-medium">
            Your Email:*
          </label>
          <input
            type="text"
            id="email"
            className="bg-c-bolddark border border-c-semidark rounded-lg focus:ring-c-blue focus:border-c-blue block w-full  outline-none p-4"
            placeholder="Enter your email here"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-sm font-medium text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* message  */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm md:text-base font-medium">
            Your Message:*
          </label>
          <textarea
            rows={3}
            type="text"
            id="message"
            className="bg-c-bolddark border border-c-semidark rounded-lg focus:ring-c-blue focus:border-c-blue block w-full  outline-none p-4"
            placeholder="Enter your message here"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span className="text-sm font-medium text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="text-base font-medium py-2 px-6 w-fit bg-accent rounded-lg hover:bg-accent/80 transition-all cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
