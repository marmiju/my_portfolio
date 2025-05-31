"use client";

import { Project } from "@/lib/ProjectsFetch";
import React from "react";
import { BiCross } from "react-icons/bi";

interface Props {
  project: Project;
  onClose: () => void;
}

export const PortfolioModal: React.FC<Props> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-secondary rounded-xl max-w-3xl w-full overflow-hidden relative shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-primary hover:text-red-500 transition"
        >
          <BiCross />
        </button>

        {/* Image */}
        <img
          src={project.preview}
          alt={project.name}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-primary">{project.name}</h2>
          <p className="text-text">{project.desc}</p>

          <div className="flex gap-6 pt-4">
            <a
              href={"https://" + project.repo}
              target="_blank"
              className="text-blue-600 hover:underline font-semibold"
            >
              🔗 GitHub Repo
            </a>
            <a
              href={project.preview}
              target="_blank"
              className="text-green-600 hover:underline font-semibold"
            >
              🚀 Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
