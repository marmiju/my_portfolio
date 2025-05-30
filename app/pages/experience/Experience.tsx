import { ExperienceType, FetchExperience } from "@/lib/fatchExperience";
import Image from "next/image";
import React from "react";

const Experience = async () => {
  const experience: ExperienceType[] = await FetchExperience();
  console.log("Experience", experience);
  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <h1 className="text-center font-bold text-2xl m-4">Experience</h1>
      <div>
        {experience.map((exp, ind) => {
          return (
            <div
              className="  flex flex-wrap gap-4 border-b  p-2 border-black/5"
              key={ind}
            >
              <div className="">
                <Image
                  className=" bg-white items-start p-2 rounded-xl border shadow-md border-black/2"
                  width={200}
                  height={200}
                  src={exp.image}
                  alt={exp.company}
                />
              </div>
              <div>
                <p className="font-bold text-2xl text-blue-600">
                  {exp.company}
                </p>
                <p className="font-normal text-sm">{exp.location}</p>
                <div className="p-2">
                  {exp.positions.map((pos, indx) => {
                    return (
                      <div key={indx}>
                        <p className="font-medium text-xl">
                          {"● " + pos.position}
                        </p>
                        <div className="border-l-2 ml-1 p-2">
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
                                <pre className="bg-gray-200 px-2" key={index}>
                                  {skl}
                                </pre>
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
