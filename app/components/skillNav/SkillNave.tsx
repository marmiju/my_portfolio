"use client";
import { SkillNavigateData } from "@/lib/navigate/SkillNavigate";
import React, { useState } from "react";

type skillNav = {
  setskillNav: (value: string) => void;
};

export const SkillNave: React.FC<skillNav> = ({ setskillNav }) => {
  const skillsNavData = SkillNavigateData();
  const [skillnav, setSkillnav] = useState("All");

  const onchenge = (data: string) => {
    setSkillnav(data);
  };

  return (
    <div className="grid grid-cols-1 text-sm gap-x-4 space-x-2.5 font-normal mt-2">
      {skillsNavData.map((data, i) => (
        <button
          key={i}
          onClick={() => onchenge(data)}
          className={` hover:bg-gray-200 shadow-gray-400 shadow-2xl font-semibold ${
            skillnav === data ? "bg-gray-200 mb-2  " : " text-gray-400 bg-white"
          }  py-1 hover:shadow hover:cursor-pointer transition-all duration-300 rounded-r-sm`}
        >
          {data}
        </button>
      ))}
    </div>
  );
};
