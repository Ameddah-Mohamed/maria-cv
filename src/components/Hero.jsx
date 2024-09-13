import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import mariaImage from "../assets/images/maria.jpg";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Mechanical Engineer", "AI Engineer"],
    loop: true, // Loop the typewriter effect
    typeSpeed: 200, // Speed at which to type each letter
    deleteSpeed: 100, // Speed at which to delete each letter
    delaySpeed: 1000, // Delay before starting to delete the word
  });

  return (
    <>
      {/* container */}
      <div className="grid grid-cols-6">
        {/* empty div */}
        <div></div>

        <div
          className=" col-start-2 col-span-4"
          style={{ height: "calc(100vh - 64px)" }}
        >
          {/* flex container */}
          <div className="flex flex-col-reverse sm:flex-row justify-evenly mx-auto items-center w-full h-full gap-6 ">
            {/* Description */}
            <div
              className="flex flex-col gap-10 items-center sm:items-start"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {/* Text */}
              <div className="text-center sm:text-start">
                <h1 className="text-white text-[1.8rem] md:text-[2.7rem]">
                  Hi, I&apos;m{" "}
                  <span className="text-secondary">Maria Ameddah!</span>
                </h1>
                <h3 className="text-white text-[1rem] md:text-[1.3rem] mt-2">
                  I&apos;m a <span className="text-secondary">{text}</span>
                  <Cursor />
                </h3>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="bg-secondary text-sm md:text-lg text-gray-800 px-3 py-2 rounded hover:px-5 hover:py-3 transition-all duration-300 ease-in-out">
                  CV
                </button>

                <button className="text-secondary text-sm md:text-lg bg-primary hover:text-primary hover:bg-secondary px-3 py-2 transition-all duration-300 ease-in-out rounded border-[1px] border-secondary ">
                  <a href="#about">About Me</a>
                </button>
              </div>
            </div>

            {/* img */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <img
                src={mariaImage}
                className="max-h-[230px] sm:max-h-[250px] md:max-h-[280px] hover:sm:h-[310px] transition-all duration-300 ease-in-out rounded-[10rem]"
                alt="Maria Ameddah"
                style={{ transition: "box-shadow 0.3s ease" }}
                onMouseOver={(event) =>
                  (event.currentTarget.style.boxShadow = "0 0 50px #9599f0")
                }
                onMouseOut={(event) =>
                  (event.currentTarget.style.boxShadow = "none")
                }
              />
            </div>
          </div>
        </div>

        {/* empty div */}
        <div></div>
      </div>
    </>
  );
};

export default Hero;
