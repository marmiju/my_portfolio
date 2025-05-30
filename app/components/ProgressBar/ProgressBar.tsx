import React from "react";

// ✅ Correctly import the type if it's exported as a type
import type { skillspro } from "../skillsSection/SkillsSection";

type ProgressBarProps = {
  skillData: skillspro;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ skillData }) => {
  return (
    <div className="my-2 justify-center items-cente group w-full">
      <div className="flex text-sm justify-center w-full">
        <p className=" overflow-ellipsis font-medium">{skillData.title}</p>
      </div>
      <div className="w-full  bg-slate-200 rounded-full mt-1">
        <div
          className="h-full text-end bg-black/50 group-hover:bg-black duration-300 text-slate-200 text-sm p-1 rounded-full"
          style={{ width: `${skillData.description}%` }}
        >
          <p>{skillData.description}</p>
        </div>
      </div>
    </div>
  );
};
