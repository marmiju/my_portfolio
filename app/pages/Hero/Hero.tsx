import {
  HeroContent,
  ProfileType,
} from "@/app/components/heroContent/heroContent";
import { IconButton } from "@/app/components/iconButton/IconButton";
import { getProfileData } from "@/lib/profile";
import React from "react";

export const Hero = async () => {
  const profile: ProfileType = await getProfileData();
  console.log(profile.name);
  return (
    <div className="flex my-2 rounded-2xl  flex-col-reverse md:h-screen  md:flex-row md:max-w-[700px] lg:max-w-[1200px] mt-10 md:mt-0 mx-auto items-center justify-between self-center">
      <HeroContent key={profile.name} profile={profile} />
      <div className=" grid grid-cols-1 justify-center">
        <img
          className="max-w-[600]"
          src={profile.url}
          alt="Picture of the author"
        />
        <div className="flex flex-wrap justify-center m-2  transform duration-1000 space-x-1.5">
          {profile.social.map((data, i) => {
            return <IconButton key={i} social={data} />;
          })}
        </div>
      </div>
    </div>
  );
};
