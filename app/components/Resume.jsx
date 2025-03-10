"use client";
import { Circle } from "lucide-react";
const ResumeSection = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div   key={title}
        data-aos="zoom-in"
        data-aos-delay={500}
        className="grid grid-cols-1 gap-6 border-l-2 border-blue-500 pl-4"
      >
        {items.map((item, index) => (

          <div key={index} className="flex items-start justify-start gap-2">
            <Circle
              className="text-blue-500 absolute bg-white  left-[-12px]"
              size={24}
            />

            <div key={index} className="relative">
              <div className=" text-blue-500 flex items-center justify-start gap-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>
              {item.subTitle && (
                <p className="italic text-gray-700">{item.subTitle}</p>
              )}
              {item.date && <p className="text-gray-500">{item.date}</p>}
              {item.description && (
                <p className="text-gray-600">{item.description}</p>
              )}
              {item.details && (
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Resume = () => {
  const summary = [
    {
      title: "BRANDON JOHNSON",
      description:
        "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
      details: [
        "Portland par 127, Orlando, FL",
        "(123) 456-7891",
        "alice.barkley@example.com",
      ],
    },
  ];

  const education = [
    {
      title: "MASTER OF FINE ARTS & GRAPHIC DESIGN",
      subTitle: "Rochester Institute of Technology, Rochester, NY",
      date: "2015 - 2016",
      description:
        "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.",
    },
    {
      title: "BACHELOR OF FINE ARTS & GRAPHIC DESIGN",
      subTitle: "Rochester Institute of Technology, Rochester, NY",
      date: "2010 - 2014",
      description:
        "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis.",
    },
  ];

  const experience = [
    {
      title: "SENIOR GRAPHIC DESIGN SPECIALIST",
      subTitle: "Experion, New York, NY",
      date: "2019 - Present",
      details: [
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials.",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design.",
        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000.",
      ],
    },
    {
      title: "GRAPHIC DESIGN SPECIALIST",
      subTitle: "Stepping Stone Advertising, New York, NY",
      date: "2017 - 2018",
      details: [
        "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).",
        "Managed up to 5 projects or tasks at a given time while under pressure.",
        "Recommended and consulted with clients on the most appropriate graphic design.",
        "Created 4+ design presentations and proposals a month for clients and account managers.",
      ],
    },
  ];

  return (
    <div
  
      data-aos="fade-right"
      className="container  mx-auto flex flex-col items-start justify-start gap-10 w-full  shadow-lg rounded-lg py-10 max-md:py-4"
    >
        <div className="flex flex-col items-start justify-start w-full gap-4">
      <h1   id="resume"  className="text-3xl font-bold text-gray-900 ">Resume</h1>
      <span className="w-[100px] h-1 bg-blue-500 text-start"></span>
      <p className="text-gray-600 mb-6">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate.
      </p>            
        </div>


      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        <div data-aos="zoom-in">
          <ResumeSection title="Summary" items={summary} />
          <ResumeSection title="Education" items={education} />
        </div>
        <div data-aos="zoom-out">
          <ResumeSection title="Professional Experience" items={experience} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
