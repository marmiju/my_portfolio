import { HeroContent, ProfileType } from '@/app/components/heroContent/heroContent'
import { IconButton } from '@/app/components/iconButton/IconButton'
import { getProfileData } from '@/lib/profile'
import Image from 'next/image'
import React from 'react'

export const Hero = async () => {
    const profile: ProfileType = await getProfileData()
    console.log(profile.name)
    return (
        <div className='flex my-2 rounded-2xl bg-[#f5f5f5] flex-col-reverse md:h-[600px]  md:flex-row md:max-w-[700px] lg:max-w-[1200px] mt-10 md:mt-2 mx-auto items-center justify-between self-center'>

            <HeroContent key={profile.name} profile={profile} />
            <div className=' grid grid-cols-1 justify-center'>
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
