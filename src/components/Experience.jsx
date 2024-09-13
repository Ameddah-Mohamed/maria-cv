import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import polytech from "../assets/images/polytech.jpeg";
import versailles from "../assets/images/versailles.jpeg";
import vic from "../assets/images/vic.jpeg";
import total from "../assets/images/total.jpeg";
import nanterre from "../assets/images/nanterre.jpeg";
import safran from "../assets/images/safran.jpeg";
import Arrow from "../assets/svgs/Arrow";
import { useState } from "react";

const Experience = () => {
  const [arrowClicked, setArrowClicked] = useState(false);
  return (
    <>
      <div id="experience" className=" mx-auto flex flex-col pt-4 mt-10">
        {/* about me text */}
        <div className="flex flex-col items-center sm:mb-0 mb-3">
          <h3 className="text-white text-md sm:text-lg">Explore My</h3>
          <h1 className="text-secondary text-3xl sm:text-5xl">Experience</h1>
        </div>

        <div className="p-10 pt-20">
          <VerticalTimeline>
            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="Sep 2017 - Sep 2019"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={polytech}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="font-bold text-lg">
                Ecole National Polytechnique
              </h3>
              <h4 className="text-sm mt-1">
                - Preparatory engineering classes
              </h4>

              <h4 className="font-bold text-sm mt-3">
                Skills:{" "}
                <span className="font-normal">
                  Algerba, Analysis, Probability, Statistics ..
                </span>
              </h4>
            </VerticalTimelineElement>

            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="Sep 2019 - Jul 2022"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={polytech}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="font-bold text-lg">
                Ecole National Polytechnique
              </h3>
              <h4 className="text-sm mt-1">
                - Engineer&apos;s degree, Hydraulics
              </h4>

              <h4 className="font-bold text-sm mt-3">
                Skills:{" "}
                <span className="font-normal">
                  Simulation numérique · Research and Development (R&D)
                </span>
              </h4>
            </VerticalTimelineElement>

            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="Sep 2022 - Jun 2023"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={versailles}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="font-bold text-lg">
                UVSQ Université de Versailles Saint-Quentin-en-Yvelines
              </h3>
              <h4 className="text-sm mt-1">
                - Master&apos;s degree, Méthodes mécaniques pour la mécanique
              </h4>

              <h4 className="font-bold text-sm mt-3">
                Skills:{" "}
                <span className="font-normal">
                  Simulation numérique · Finite Element Analysis (FEA) ·
                  Research and Development (R&D)
                </span>
              </h4>
            </VerticalTimelineElement>

            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="Jan 2020 - Jan 2021 · 1 yr 1 mo"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img src={vic} className="w-[70%] h-[70%] object-contain" />
                </div>
              }
            >
              <h3 className="font-bold text-lg">
                Human Resources Manager (Volunteering)
              </h3>
              <h4 className="text-sm mt-1">
                - Vision & Innovation Club · Part-time
              </h4>

              <h4 className="font-bold text-sm mt-3">Algiers, Algeria</h4>
            </VerticalTimelineElement>

            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="Sep 2021 - Sep 2021 · 1 mo"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img src={total} className="w-[70%] h-[70%] object-contain" />
                </div>
              }
            >
              <h3 className="font-bold text-lg">Intern</h3>
              <h3 className="font-bold text-lg">TotalEnergies · Internship</h3>
              <h4 className="text-sm mt-1">- Algiers, Algeria</h4>

              <h4 className="font-bold text-sm mt-3">Fluids transport</h4>
            </VerticalTimelineElement>

            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="Sep 2023 - Sep 2024"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={nanterre}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="font-bold text-lg">Université Paris Nanterre</h3>
              <h4 className="text-sm mt-1">
                Master 2 (M2), Mécanique des Structures Composites :
                Aéronautique et Eco-conception
              </h4>

              <h4 className="font-bold text-sm mt-3">
                Skills:{" "}
                <span className="font-normal">
                  Simulation numérique · Finite Element Analysis (FEA) ·
                  Research and Development (R&D)
                </span>
              </h4>
            </VerticalTimelineElement>

            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="Apr 2024 - Present · 6 mos"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={safran}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="font-bold text-lg">
                Stagiaire en dynamique d&apos;ensemble
              </h3>
              <h3 className="font-bold text-xl">
                Safran Aircraft Engines · Internship
              </h3>
              <h4 className="text-sm mt-1">
                Master 2 (M2), Mécanique des Structures Composites :
                Aéronautique et Eco-conception
              </h4>

              <h4 className="font-bold text-sm mt-3">
                Description:{" "}
                <span className="font-normal">
                  Modélisation de la réponse vibratoire des moteurs d&apos;avion
                  en utilisant IA Dynamique d&apos;ensemble
                </span>
              </h4>

              <h2 className="my-3 text-lg font-semibold text-primary flex  ">
                Skills{" "}
                <span
                  onClick={() => setArrowClicked(!arrowClicked)}
                  className={`transition-transform duration-300 ${
                    arrowClicked ? "rotate-180" : ""
                  }`}
                >
                  <Arrow />
                </span>
              </h2>
              <ul
                className={`max-w-md space-y-1 text-slate-200 list-disc list-inside ${
                  arrowClicked ? "block" : "hidden"
                } `}
              >
                <li>Intelligence artificielle (IA)</li>
                <li>Data Science</li>
                <li>Mécanique</li>
                <li>Modélisation</li>
                <li>Moteurs d&apos;avions</li>
                <li>Analyse de vibration</li>
                <li>Research and Development (R&D)</li>
                <li>Dynamique (mécanique)</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
