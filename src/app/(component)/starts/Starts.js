'use client'
import React, { useState, useEffect } from "react";


const Starts = () => {
  // State for each card's number
  const [companiesWorked, setCompaniesWorked] = useState(0);
  const [projectsDelivered, setProjectsDelivered] = useState(0);
  const [skillsAcquired, setSkillsAcquired] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);

  // Define the target values for each stat
  const targets = {
    companiesWorked: 3,
    projectsDelivered: 70,
    skillsAcquired: 12,
    yearsExperience: 3,
  };

  // Function to animate number from 0 to target value
  const animateNumbers = (target, setter) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        setter(count);
      } else {
        clearInterval(interval);
      }
    }, 30); // Change interval speed as needed
  };

  // Use IntersectionObserver to trigger animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the animations
            animateNumbers(targets.companiesWorked, setCompaniesWorked);
            animateNumbers(targets.projectsDelivered, setProjectsDelivered);
            animateNumbers(targets.skillsAcquired, setSkillsAcquired);
            animateNumbers(targets.yearsExperience, setYearsExperience);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const section = document.querySelector("#statsSection");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
    <div
      id="statsSection"
      className="flex flex-col md:flex-row mt-10 mx-24 items-center justify-center gap-4 p-6 bg-[#383838] text-white rounded-lg shadow-md"
      >
      {/* Card 1 */}
      <div className="flex flex-col items-center justify-center p-4 w-full md:w-1/4 text-center border-b md:border-b-0 md:border-r border-gray-500">
        <h3 className="text-4xl font-bold text-lime-400">{companiesWorked}</h3>
        <p className="text-sm font-semibold mt-2">Companies Worked at</p>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col items-center justify-center p-4 w-full md:w-1/4 text-center border-b md:border-b-0 md:border-r border-gray-500">
        <h3 className="text-4xl font-bold text-lime-400">{projectsDelivered}</h3>
        <p className="text-sm font-semibold mt-2">Projects Delivered</p>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col items-center justify-center p-4 w-full md:w-1/4 text-center border-b md:border-b-0 md:border-r border-gray-500">
        <h3 className="text-4xl font-bold text-lime-400">{skillsAcquired}</h3>
        <p className="text-sm font-semibold mt-2">Skills Acquired</p>
      </div>
      {/* Card 4 */}
      <div className="flex flex-col items-center justify-center p-4 w-full md:w-1/4 text-center">
        <h3 className="text-4xl font-bold text-lime-400">{yearsExperience}+</h3>
        <p className="text-sm font-semibold mt-2">Year Experience</p>
      </div>
    </div>



   

        </>
  );
};

export default Starts;
