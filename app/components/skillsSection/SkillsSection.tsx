"use client";
import Image from "next/image";
import { getSkills } from "@/lib/Skills";
import { montserat } from "@/lib/fonts/monsera";
import { SkillNave } from "../skillNav/SkillNave";
import { useState, useEffect } from "react";

import { ProgressBar } from "../ProgressBar/ProgressBar";

export type skillsType = skillspro[];

export type skillspro = {
  id: string;
  title: string;
  description: string;
  url: string;
  cetagory: string;
};

const SkillsSection = () => {
  const [selectedSkills, setSelectedSkills] = useState("All");
  const [skills, setSkills] = useState<skillsType>([]);

  const handleSkillNav = (value: string) => {
    setSelectedSkills(value);
  };

  // Fetch skills data on component mount
  useEffect(() => {
    const fetchSkills = async () => {
      const skillsData = await getSkills();
      setSkills(skillsData);
    };
    fetchSkills();
  }, []);

  // Filter skills based on selected category
  const filteredSkills =
    selectedSkills === "All"
      ? skills
      : skills.filter((skill) => skill.cetagory === selectedSkills);

  return (
    <div
      className={`grid 1 text-gray-600 p-4 ${montserat.className} max-w-[1300px] mx-auto `}
    >
      <div className=" mx-auto my-4">
        <SkillNave SkillNAv={handleSkillNav} />
      </div>
      <div
        className={`flex flex-wrap justify-center text-2xl max-w-[1200px] mx-auto`}
      >
        {filteredSkills.length > 0 ? (
          filteredSkills.map((data, i) => (
            <div
              key={i}
              className="border border-text/20 hover:cursor-pointer 
              backdrop-blur-md transition-all duration-300 grayscale 
              hover:grayscale-0 flex flex-col justify-center items-center 
              p-4 gap-4 group "
            >
              <Image
                className="rounded-2xl duration-500 mx-2"
                src={data.url}
                alt={data.title}
                height={80}
                width={80}
              />

              {/* Tooltip-like hover effect at bottom */}
              <div className="duration-300 transition-all bottom-[-50px] w-full  group-hover:flex justify-center">
                <ProgressBar skillData={data} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-full text-text col-span-full">
            No skills found for {selectedSkills}
          </p>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
