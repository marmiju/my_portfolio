"use client";
import React from "react";
import { DesignationLoop } from "../designationLoop/DesignationLoop";
import { montserat, pixelfy } from "@/lib/fonts/monsera";
import { HiFolderDownload } from "react-icons/hi";

export type ProfileType = {
  url: string;
  name: string;
  designation: string[];
  description?: string;
  bio?: string;
  resume: string;
  quats?: string;
  social: Social[];
};
export type Social = {
  img: string;
  title: string;
  link: string;
};
export type prop = {
  profile: ProfileType;
};

export const HeroContent: React.FC<prop> = ({ profile }) => {
  return (
    <div
      className={`grid ${montserat.className}  text-xl text-center md:text-left`}
    >
      <div className="text-text/50 mb-4 md:mb-10 text-sm md:text-2xl font-semibold">
        {profile.bio ? "°°°" + profile.bio + "°°°" : ""}
      </div>
      <h1 className="text-text">Hello! i&apos;m</h1>
      <h1
        className={`text-4xl md:text-6xl text-primary font-bold lg:text-8xl ${pixelfy.className}`}
      >
        {profile.name}
      </h1>
      {/* <h1
        className={`absolute opacity-5 text-primary block md:hidden lg:block  mt-20 text-4xl md:text-6xl lg:text-7xl font-extrabold ${montserat.className}`}
      >
        {profile.name}
      </h1> */}
      <div className="grid lg:flex justify-center md:justify-start lg:justify-between">
        <div>
          <button className="flex items-center gap-2 bg-secondary hover:cursor-pointer hover:bg-primary text-primary hover:text-secondary duration-300 px-4 py-1 text-sm font-medium rounded-full ">
            Download rursume <HiFolderDownload className="text-2xl" />
          </button>
        </div>
        <DesignationLoop data={profile.designation} />
      </div>
    </div>
  );
};
export { montserat };
