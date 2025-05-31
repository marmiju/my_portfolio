import { FetchLeetCode, UserProfile } from "@/lib/CP/LeetCode";
import { montserat } from "@/lib/fonts/monsera";
import Image from "next/image";
import React from "react";
import { PiBagFill, PiTagFill } from "react-icons/pi";
import { IconText } from "./iconTag/Icontage";
import { IoSchool } from "react-icons/io5";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";

export const Avater = async () => {
  const profile: UserProfile = await FetchLeetCode();
  return (
    <div
      className={`col-span-3 
            ${montserat.className}
             border border-slate-200 
             rounded-2xl p-2`}
    >
      {/* image flex with username and name */}
      <div className="flex gap-2  overflow-hidden">
        <Image
          className="rounded-lg"
          width={80}
          height={800}
          src={profile?.avatar || ""}
          alt={profile?.username || "Profile"}
        />
        <div>
          <p className="font-semibold">{profile?.name || "mar miju"}</p>
          <p className="text-[12px]">{profile?.username || "unknown user"}</p>
          <p className="text-xl font-bold">
            {"ranking: " + (profile?.ranking ?? "N/A")}
          </p>
        </div>
      </div>
      {/* end of avater section */}
      <IconText text={profile.about} />
      <IconText icon={<PiBagFill />} text={profile.company} />
      <IconText icon={<IoSchool />} text={profile.school} />
      <IconText icon={<BsGithub />} text={profile.gitHub} />
      <IconText icon={<ImTwitter />} text={profile.twitter} />
      <IconText icon={<BsLinkedin />} text={profile.linkedIN} />

      <div className="flex flex-wrap gap-2">
        <PiTagFill />
        {profile.skillTags.map((skill, indx) => {
          return (
            <p key={indx} className="bg-slate-100 px-2 text-sm rounded">
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};
