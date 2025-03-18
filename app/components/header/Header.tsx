import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <div className='w-80 md:w-96 rounded-full fixed left-1/2 transform -translate-x-1/2 mt-0 md:mt-2 p-1 backdrop-blur-xl shadow-lg border border-white text-gray-500'>
            <ul className='flex w-full justify-center space-x-5 hover:cursor-pointer'>
                <Link href={'/'}>
                    <li>
                        Home
                    </li>
                </Link>
                <Link href={'/skills'}>
                    <li>
                        Skills
                    </li>
                </Link>
                <Link href={'/experiences'}>
                    <li>
                        experiences
                    </li>
                </Link>
                <Link href={'/projects'}>
                    <li>
                        Projects
                    </li>
                </Link>


            </ul>
        </div>
    )
}
