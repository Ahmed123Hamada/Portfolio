"use client";

import { useEffect, useState, useRef } from "react";
////AOS////
import AOS from "aos";
import "aos/dist/aos.css";


const SkillBar = ({ skill, percentage }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div  className="mb-4 " ref={ref}>
      <div className="flex justify-between items-center mb-1 ">
        <span className="font-semibold text-gray-800">{skill}</span>
        <span className="font-semibold text-gray-800">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2 relative">
        <div
          className={`bg-blue-500 h-2 rounded-full transition-all duration-1000`}
          style={{ width: visible ? `${percentage}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { skill: "HTML", percentage: 90 },
    { skill: "CSS", percentage: 90 },
    { skill: "JAVASCRIPT", percentage: 75 },
    { skill: "React JS", percentage: 85 },
    { skill: "Tailwind CSS", percentage: 90 },
    { skill: "Node JS", percentage: 0 },
  ];

  return (
    <div id="skills" data-aos="fade-down" className="bg-gray-100 py-8  m-auto container relative z-0">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Skills</h2>
      <div className="w-16 border-b-4 border-blue-500 mb-4"></div>
      <p className="text-gray-600 mb-6">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
