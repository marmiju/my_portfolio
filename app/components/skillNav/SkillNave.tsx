"use client";
import { SkillNavigateData } from "@/lib/navigate/SkillNavigate";
import React, { useEffect, useState } from "react";

type skillNav = {
  SkillNAv: (value: string) => void;
};

export const SkillNave: React.FC<skillNav> = ({ SkillNAv }) => {
  const [skillnav, setSkillnav] = useState("All");
  const [skillsNavData, setSkillsNavData] = useState<string[]>([]); // state for async data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const navData = await SkillNavigateData();
        setSkillsNavData(navData);
      } catch (error) {
        console.error("Failed to fetch skill categories", error);
      }
    };

    fetchData();
  }, []);

  const onChange = (data: string) => {
    setSkillnav(data);
    SkillNAv(data);
  };

  return (
    <div className="block text-center text-black/70 space-x-1 space-y-1">
      {skillsNavData.map((data, i) => (
        <button
          key={i}
          onClick={() => onChange(data)}
          className={`text-center py-1 px-2 rounded-full border border-black/10 
            ${
              skillnav === data
                ? "bg-white shadow text-black/50 "
                : "bg-slate-200 textblack/70 "
            } hover:cursor-pointer`}
        >
          {data}
        </button>
      ))}
    </div>
  );
};
