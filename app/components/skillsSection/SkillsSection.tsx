"use client";
import Image from "next/image";
import { getSkills } from "@/lib/Skills";
import { montserat } from "@/lib/fonts/monsera";
import { SkillNave } from "../skillNav/SkillNave";
import { useState, useEffect } from "react";
import { div } from "framer-motion/client";
import { Montserrat } from "next/font/google";
import { Circle, Line } from "rc-progress";
import backroundImage from "../../../lib/backgroundImage.png";

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
      // style={{
      //   backgroundImage: `url(${backroundImage.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      className={`grid md:flex gap-2 text-gray-600 p-4 ${montserat.className} max-w-[1300px] mx-auto`}
    >
      <div className="shadow-md inset-shadow p-1 bg-slate-100  w-96 mx-auto border border-black/10  ">
        <SkillNave SkillNAv={handleSkillNav} />
      </div>
      <div
        className={`grid text-2xl  grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-0   max-w-[1200px] mx-auto`}
      >
        <h1 className=" content-center  text-center border border-slate-300 rounded-tl-2xl">
          What I Know And Do Fun
        </h1>
        {filteredSkills.length > 0 ? (
          filteredSkills.map((data, i) => (
            <div
              key={i}
              className="border border-slate-300 hover:cursor-pointer backdrop-blur-md transition-all duration-300 grayscale-100  hover:grayscale-0 flex flex-col justify-center items-center p-2 group"
            >
              <Image
                className="rounded-2xl"
                src={data.url}
                alt={data.title}
                height={80}
                width={80}
              />
              9.9
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
