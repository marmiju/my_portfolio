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
        <p className=" overflow-ellipsis font-medium text-text">
          {skillData.title}
        </p>
      </div>
      <div className="w-full  bg-secondary rounded-full mt-1">
        <div
          className="h-full text-end bg-primary group-hover:bg-primary/70 duration-300 text-alter text-sm p-1 rounded-full"
          style={{ width: `${skillData.description}%` }}
        >
          <p>{skillData.description + "%"}</p>
        </div>
      </div>
    </div>
  );
};
