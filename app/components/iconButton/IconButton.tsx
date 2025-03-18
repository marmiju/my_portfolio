import React from "react";
import Image from "next/image";
import { Social } from "../heroContent/heroContent";
import Link from "next/link";



export const IconButton = ({ social }: { social: Social }) => {


    if (!social.img) {
        console.warn("Invalid Image URL:", social);
        return null;
    }

    return (
        <a href={social.link} target="_blank">
            <div className="group flex border-white hover:bg-white border shadow-md rounded-full items-center gap-2 min-w-[40px] w-10 transition-all duration-300 ease-in-out hover:w-fit">
                <Image src={social.img} alt={social.title || "Social icon"} width={40} height={40} />
                <h1 className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pr-2">
                    {social.title}
                </h1>
            </div>
        </a>



    );
};
