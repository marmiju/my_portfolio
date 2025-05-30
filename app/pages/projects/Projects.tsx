import { Singleportfolio } from "@/app/components/Singleportfolio/singleportfolio";
import { Project, ProjectFetch } from "@/lib/ProjectsFetch";
import React from "react";

const Projects = async () => {
  const projects: Project[] = await ProjectFetch();
  return (
    <>
      <p className="w-full text-center text-4xl md:text-6xl font-bold">
        Projects
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
    </>
  );
};

export default Projects;
