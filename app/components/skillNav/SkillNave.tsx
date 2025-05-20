"use client";
import { SkillNavigateData } from "@/lib/navigate/SkillNavigate";
import React, { useState } from "react";

type skillNav = {
  SkillNAv: (value: string) => void;
};

export const SkillNave: React.FC<skillNav> = ({ SkillNAv }) => {
  const skillsNavData = SkillNavigateData();
  const [skillnav, setSkillnav] = useState("All");

  const onchenge = (data: string) => {
    setSkillnav(data);
    SkillNAv(data);
  };

  return (
    <div className=" grid text-slate-600 ">
      {skillsNavData.map((data, i) => (
        <button
          key={i}
          onClick={() => onchenge(data)}
          className={`
          text-start px-2 py-1
          ${
            skillnav === data
              ? "bg-white text-slate-800  "
              : " bg-slate-100 text-slate-400"
          }
          hover:cursor-pointer 
          `}
        >
          {data}
        </button>
      ))}
    </div>
  );
};
