import { ExperienceType, FetchExperience } from "@/lib/fatchExperience";
import Image from "next/image";
import React from "react";

const Experience = async () => {
  const experience: ExperienceType[] = await FetchExperience();
  return (
    <div className="max-w-[1200px] mx-auto my-10 p-2">
      <h1 className="text-center font-bold text-2xl m-4 ">Experience</h1>
      <div className="space-y-2">
        {experience.map((exp, ind) => {
          return (
            <div
              className=" bg-secondary  flex flex-wrap gap-4 rounded-2xl p-4 shadow   border-slate-200 "
              key={ind}
            >
              <div className="">
                <Image
                  className=" bg-white items-start p-2 rounded-xl border  border-black/10"
                  width={200}
                  height={200}
                  src={exp.image}
                  alt={exp.company}
                />
              </div>
              <div>
                <p className="font-bold text-2xl text-primary">{exp.company}</p>
                <p className="font-normal text-sm text-text/90">
                  {exp.location}
                </p>
                <div className="p-2 text-text">
                  {exp.positions.map((pos, indx) => {
                    return (
                      <div key={indx}>
                        <p className="font-medium text-xl">
                          <span className="pr-2 text-text/50">●</span>
                          {pos.position}
                        </p>
                        <div className="border-l-2 border-text/50 ml-1 p-2 text-text/70 text-sm ">
                          <p>{pos.type}</p>
                          <p>
                            {new Date(pos.startDate).toLocaleString("default", {
                              month: "short",
                              year: "numeric",
                            })}
                            {" - "}
                            {pos.endDate
                              ? new Date(pos.endDate).toLocaleString(
                                  "default",
                                  { month: "short", year: "numeric" }
                                )
                              : "Present"}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {pos.skills.map((skl, index) => {
                              return (
                                <p
                                  key={index}
                                  className="bg-text/20 px-2 rounded border-secondary text-text/60"
                                >
                                  {skl}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
