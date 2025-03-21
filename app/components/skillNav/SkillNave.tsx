'use client'
import { SkillNavigateData } from "@/lib/navigate/SkillNavigate"
import React, { useState } from "react"

type skillNav = {
    setskillNav: (value: string) => void;
}

export const SkillNave: React.FC<skillNav> = ({ setskillNav }) => {
    const skillsNavData = SkillNavigateData();
    const [skillnav, setSkillnav] = useState('All');

    const onchenge = (data: string) => {
        setSkillnav(data); // Update local state
        setskillNav(data); // Update parent state
    };

    return (
        <div className="block text-sm gap-x-4 space-x-2.5 font-normal mt-2">
            {
                skillsNavData.map((data, i) => (
                    <button
                        key={i}
                        onClick={() => onchenge(data)}
                        className={`${skillnav === data ? 'bg-gray-700 shadow text-white' : ' bg-white'} px-2 border border-gray-200 py-1 hover:shadow hover:cursor-pointer transition-all duration-300 rounded-xl`}
                    >
                        {data}
                    </button>



                ))
            }
        </div>
    );
};
