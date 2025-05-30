import { Project } from "@/lib/ProjectsFetch";
import React from "react";
interface props {
  pro: Project;
}
export const Singleportfolio = ({ pro }: props) => {
  return (
    <div
      className=" rounded-2xl grid border items-center bg-white border-black/10 
    hover:scale-102 duration-300 bg-clip-border overflow-hidden object-cover
    "
    >
      <img
        className="w-full object-cover border-b border-black/5 bg-clip-border overflow-hidden "
        src={pro.preview}
        alt="marmiju"
      />
      <div>
        <div className="flex flex-wrap justify-between p-2">
          <p className="text-xl font-semibold md:text-2xl">{pro.name}</p>
          <div className=" flex gap-4 items-center font-semibold text-blue-700 hover:cursor-pointer">
            <a target="_blank" href={pro.repo}>
              ● source code
            </a>
            <a target="_blank" className="font-semibold" href={pro.repo}>
              ● repo
            </a>
          </div>
        </div>
        <p className="max-w-96 h-20 flex flex-wrap overflow-hidden p-2">
          {pro.desc}
        </p>
      </div>
    </div>
  );
};
