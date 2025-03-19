
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getSkills } from "@/lib/Skills";

export type skillsType = skillspro[];

export type skillspro = {
    id: string;
    title: string;
    description: string;
    url: string;
};

const SkillsSection = async () => {
    const skills: skillsType = await getSkills()


    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 p-8 justify-center max-w-[1200px] mx-auto ">
            {skills.map((data, i) => (
                <div className="bg-white hover:scale-105 hover:bg-blend-overlay transition-all duration-300 hover:shadow-2xl rounded-2xl flex flex-col justify-center items-center relative p-4 group">
                    <Image
                        className="rounded-2xl"
                        src={data.url}
                        alt={data.title}
                        height={100}
                        width={100}
                    />
                    {/* Background Overlay on Hover */}
                    <div className="absolute inset-0 hover:bg-gray-700 bg-opacity group-hover:opacity-60 transition-all duration-300 rounded-2xl"></div>

                    {/* Text hidden by default, shown on hover */}
                    <h1 className="absolute text-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {data.title}
                    </h1>
                </div>



            ))}
        </div>
    );
};

export default SkillsSection;
