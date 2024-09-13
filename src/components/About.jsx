import React from "react";
import mariaAboutImage from "../assets/images/about-img.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="h-screen mx-auto flex flex-col pt-4 mt-10">
        {/* about me text */}
        <div
          className="flex flex-col items-center sm:mb-0 mb-3"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h3 className="text-white text-md sm:text-lg">Get To Know More</h3>
          <h1 className="text-secondary text-3xl sm:text-5xl">About Me</h1>
        </div>

        {/* about content */}
        <div
          className="flex flex-col justify-center items-center sm:flex-row gap-10 sm:mx-auto mx-8"
          style={{ height: "calc(100vh - 100px)" }} // Adjust 100px to the height of the first container
        >
          {/* img */}
          <div data-aos="zoom-in" data-aos-duration="800">
            <img
              src={mariaAboutImage}
              className="max-h-[230px] sm:max-h-[250px] md:max-h-[280px] transition-all duration-300 ease-in-out rounded-lg"
              alt="Maria Ameddah"
            />
          </div>

          <div
            className="flex flex-col gap-4"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <p className="text-slate-400 max-w-96">
              As a Mechanical Engineer with a strong AI background, I integrate
              traditional engineering with advanced technology. My expertise
              spans systems design, thermodynamics, and material science,
              alongside machine learning and automation. I use AI to solve
              complex mechanical problems, optimize processes, and drive
              innovation, combining hands-on engineering with cutting-edge AI
              strategies.
            </p>
            <button className="bg-secondary text-sm md:text-[1rem] text-gray-800 px-2 py-1 rounded hover:px-5 hover:py-3 transition-all duration-300 ease-in-out flex-shrink max-w-1/2">
              <a href="">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
