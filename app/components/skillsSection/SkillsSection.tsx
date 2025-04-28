"use client";
import Image from "next/image";
import { getSkills } from "@/lib/Skills";
import { montserat } from "@/lib/fonts/monsera";
import { SkillNave } from "../skillNav/SkillNave";
import { useState, useEffect } from "react";
import { div } from "framer-motion/client";
import { Montserrat } from "next/font/google";
import { Circle, Line } from "rc-progress";

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
      console.log(skillsData);
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
      className={`grid md:flex bg-gray-50 text-gray-600 p-4 ${montserat.className}`}
    >
      <div className="">
        <h1>What I Know And Do Fun</h1>
        <SkillNave setskillNav={handleSkillNav} />
      </div>
      <div
        className={`grid text-2xl items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 p-8 justify-itecenter max-w-[1200px] mx-auto`}
      >
        {filteredSkills.length > 0 ? (
          filteredSkills.map((data, i) => (
            <div
              key={i}
              className=" bg-white shadow-gray-300 shadow-md border-y-gray-400 hover:scale-105 hover:bg-blend-overlay transition-all duration-300 hover:shadow-2xl rounded-2xl flex flex-col justify-center items-center p-4 group"
            >
              <Image
                className="rounded-2xl"
                src={data.url}
                alt={data.title}
                height={100}
                width={100}
              />
            </div>
          ))
        ) : (
          <p className="text-center w-full text-gray-500 col-span-full">
            No skills found for "{selectedSkills}"
          </p>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
