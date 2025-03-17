import { HeroContent, ProfileType } from '@/app/components/heroContent/heroContent'
import { getProfileData } from '@/lib/profile'
import Image from 'next/image'
import React from 'react'

export const Hero = async () => {
    const profile: ProfileType = await getProfileData()
    console.log(profile.name)
    return (
        <div className='grid my-2 rounded-2xl bg-[#f5f5f5]  grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto h-screen items-center '>

            <HeroContent key={profile.name} profile={profile} />
            <div className=' grid justify-center items-center'>

                <Image
                    src={profile.url}
                    alt="Picture of the author"
                    placeholder='blur'
                    width={400}
                    height={400}
                    blurDataURL={profile.url}

                />
            </div>

        </div>
    )
}
