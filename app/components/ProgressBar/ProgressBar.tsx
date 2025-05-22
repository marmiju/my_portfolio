import React from "react";

// ✅ Correctly import the type if it's exported as a type
import type { skillspro } from "../skillsSection/SkillsSection";

type ProgressBarProps = {
  skillData: skillspro;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ skillData }) => {
  return (
    <div className="my-2 justify-center items-cente  w-full">
      <div className="flex justify-between w-full">
        <p className="text-sm font-medium">{skillData.title}</p>
        <p className="text-sm font-medium">{skillData.description}%</p>
      </div>
      <div className="w-full h-2 bg-slate-200 rounded-full mt-1">
        <div
          className="h-full bg-black rounded-full"
          style={{ width: `${skillData.description}%` }}
        ></div>
      </div>
    </div>
  );
};
