import React from "react";

export const Skills = () => {
  const skills = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "PHP", value: 80 },
    { name: "WordPress/CMS", value: 90 },
    { name: "Photoshop", value: 55 },
  ];

  return (
    <section id="skills" className="bg-[#f4fafd] py-16 px-4 lg:px-4">
      <div className="container pb-16" data-aos="fade-up">
        <h2 className="text-[32px] text-black font-bold relative mb-5 pb-5">
          Skills
        </h2>
        <p className="mb-0 text-black">
          My expertise in various technologies and tools enables me to deliver
          exceptional results in web development and design.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-wrap skills-content">
          {skills.map((skill, index) => (
            <div key={index} className="w-full md:w-1/2 p-2">
              <div className="h-[60px]">
                <span className="text-headingcolor mb-2 uppercase block font-semibold">
                  {skill.name}
                  <i className="float-right not-italic">{skill.value}%</i>
                </span>
                <div className="bg-gray-300 h-2.5 rounded">
                  <div
                    className="h-2.5 bg-primary rounded transition-all"
                    style={{ width: `${skill.value}%` }}
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
