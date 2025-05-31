import { Project } from "@/lib/ProjectsFetch";
import React from "react";
interface props {
  project: Project;
}

export const PortfolioModal: React.FC<props> = ({ project }) => {
  return <div className="fixed z-100">PortfolioModal</div>;
};
