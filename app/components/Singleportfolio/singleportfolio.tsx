"use client";
import { Project } from "@/lib/ProjectsFetch";
import React, { useState } from "react";
import { PortfolioModal } from "../Modal/PortfolioModal";
interface props {
  pro: Project;
}

export const Singleportfolio = ({ pro }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <PortfolioModal project={pro} onClose={() => setIsOpen(false)} />
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-2xl grid border hover:cursor-pointer items-center bg-secondary/10 backdrop-blur-2xl border-text/20 
      hover:scale-102 duration-300 bg-clip-border overflow-hidden"
      >
        <img
          className="w-full h-64 object-cover"
          src={pro.preview}
          alt="marmiju"
        />
        <div>
          <div className="flex flex-wrap justify-between p-2">
            <p className="text-xl font-semibold md:text-2xl text-primary">
              {pro.name}
            </p>
            <div className=" flex gap-4 text-text items-center font-semibold hover:cursor-pointer">
              <a target="_blank" href={pro.repo}>
                ● repo
              </a>
              <a target="_blank" className="font-semibold" href={pro.repo}>
                ● preview
              </a>
            </div>
          </div>
          <p
            className={`
            
            max-w-96 h-20 flex text-text flex-wrap overflow-hidden p-2`}
          >
            {pro.desc}
          </p>
        </div>
      </div>
    </>
  );
};
