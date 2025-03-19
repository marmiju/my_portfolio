"use client"
import React from 'react'
import { DesignationLoop } from '../designationLoop/DesignationLoop'
import { Montserrat_Alternates } from 'next/font/google'
import { IconButton } from '../iconButton/IconButton'

export const monserat = Montserrat_Alternates({
    subsets: ['latin'],
    weight: '800'
})
export const monserat_text = Montserrat_Alternates({
    subsets: ['latin'],
    weight: '500'
})


export type ProfileType = {
    url: string,
    name: string,
    designation: string[],
    description?: string,
    bio?: string,
    resume: string,
    quats?: string,
    social: Social[]
}
export type Social = {
    img: string;
    title: string;
    link: string;
};
export type prop = {
    profile: ProfileType
}


export const HeroContent: React.FC<prop> = ({ profile }) => {


    return (
        <div className={`grid ${monserat_text.className}  text-xl text-center md:text-left`}>
            <div className='text-gray-400 mb-4 md:mb-10 font-semibold'>
                {
                    profile.bio ? "°°°" + profile.bio + "°°°" : ''
                }

            </div>
            <h1 className='text-gray-400'>Hello! i'm</h1>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold ${monserat.className}`}>{profile.name}</h1>
            <h1 className={`absolute opacity-5  mt-20 text-4xl md:text-6xl lg:text-7xl font-extrabold ${monserat.className}`}>{profile.name}</h1>
            <div className='grid lg:flex justify-center md:justify-start lg:justify-between'>

                <div className="flex justify-center md:justify-start space-x-1.5">
                    {
                        profile.social.map((data, i) => {
                            return <IconButton key={i} social={data} />
                        })
                    }
                </div>
                <DesignationLoop data={profile.designation} />
            </div>



        </div>
    )
}
