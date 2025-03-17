import React from 'react'

export type ProfileType = {
    url: string,
    name: string,
    designation: string[],
    description?: string,
    bio?: string,
    resume: string,
    quats: string
}

type prop = {
    profile: ProfileType
}



export const HeroContent: React.FC<prop> = ({ profile }) => {
    return (
        <div className='grid ju'>
            {
                profile.name
            }
        </div>
    )
}
