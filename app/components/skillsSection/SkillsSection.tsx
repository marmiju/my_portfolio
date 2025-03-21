'use client'
import Image from "next/image";
import { getSkills } from "@/lib/Skills";
import { monserat } from "@/lib/fonts/monsera";
import { SkillNave } from "../skillNav/SkillNave";
import { useState, useEffect } from "react";

export type skillsType = skillspro[];

export type skillspro = {
    id: string;
    title: string;
    description: string;
    url: string;
    cetagory: string

};

const SkillsSection = () => {
    const [selectedSkills, setSelectedSkills] = useState('All');
    const [skills, setSkills] = useState<skillsType>([]);

    const handleSkillNav = (value: string) => {
        setSelectedSkills(value);
    };

    // Fetch skills data on component mount
    useEffect(() => {
        const fetchSkills = async () => {
            const skillsData = await getSkills();
            console.log(skillsData)
            setSkills(skillsData);
        };

        fetchSkills();
    }, []);

    // Filter skills based on selected category
    const filteredSkills = selectedSkills === 'All'
        ? skills
        : skills.filter(skill => skill.cetagory === selectedSkills);

    return (
        <div>
            {/* Layout */}
            <div className={`text-4xl bg-white  text-gray-600 max-w-[1200px] mx-auto rounded-2xl grid text-center py-2 ${monserat.className} font-bold justify-center items-center`}>
                <h1 className="border-b-2">Skills</h1>
                <SkillNave setskillNav={handleSkillNav} />
            </div>

            <div className={`grid bg-white text-2xl items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 p-8 justify-itecenter max-w-[1200px] mx-auto`}>
                {filteredSkills.length > 0 ? (
                    filteredSkills.map((data, i) => (
                        <div key={i} className="bg-white shadow-gray-300 shadow-md border-y-gray-400 hover:scale-105 hover:bg-blend-overlay transition-all duration-300 hover:shadow-2xl rounded-2xl flex flex-col justify-center items-center relative p-4 group">
                            <Image
                                className="rounded-2xl"
                                src={data.url}
                                alt={data.title}
                                height={100}
                                width={100}
                            />
                            {/* Background Overlay on Hover */}
                            <div className="absolute inset-0 hover:bg-gray-700 bg-opacity group-hover:opacity-80 transition-all duration-300 rounded-2xl"></div>
                            {/* Text hidden by default, shown on hover */}
                            <h1 className="absolute text-center text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {data.title}
                            </h1>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No skills found for "{selectedSkills}"</p>
                )}
            </div>
        </div>
    );
};

export default SkillsSection;
