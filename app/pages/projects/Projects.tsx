import { Singleportfolio } from "@/app/components/Singleportfolio/singleportfolio";
import { pixelfy } from "@/lib/fonts/monsera";
import { Project, ProjectFetch } from "@/lib/ProjectsFetch";
import React from "react";

const Projects = async () => {
  const projects: Project[] = await ProjectFetch();
  return (
    <div
      className="border border-secondary max-w-[1200px] space-x-2 space-y-2
      mx-auto rounded-2xl"
    >
      <p
        className={`w-full text-center  text-text/50 text-2xl md:text-4xl font-bold ${pixelfy.className}`}
      >
        ● Projects
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 max-w-[1200px] space-x-2 space-y-2
      mx-auto justify-center m-2 p-2
      "
      >
        {projects.map((pro, index) => {
          return <Singleportfolio key={index} pro={pro} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
