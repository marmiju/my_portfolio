"use client";
import React from "react";
import { DesignationLoop } from "../designationLoop/DesignationLoop";
import { IconButton } from "../iconButton/IconButton";
import { montserat } from "@/lib/fonts/monsera";

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
      <div className="text-gray-400 mb-4 md:mb-10 font-semibold">
        {profile.bio ? "°°°" + profile.bio + "°°°" : ""}
      </div>
      <h1 className="text-gray-400">Hello! i&apos;m</h1>
      <h1
        className={`text-4xl md:text-6xl  lg:text-7xl font-extrabold ${montserat.className}`}
      >
        {profile.name}
      </h1>
      <h1
        className={`absolute opacity-5 block md:hidden lg:block  mt-20 text-4xl md:text-6xl lg:text-7xl font-extrabold ${montserat.className}`}
      >
        {profile.name}
      </h1>
      <div className="grid lg:flex justify-center md:justify-start lg:justify-between">
        <div className="flex justify-center md:justify-start transform duration-1000 space-x-1.5">
          {profile.social.map((data, i) => {
            return <IconButton key={i} social={data} />;
          })}
        </div>
        <DesignationLoop data={profile.designation} />
      </div>
    </div>
  );
};
export { montserat };
